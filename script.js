document.addEventListener("DOMContentLoaded", function () {

    let chart;

    function fibonacci(n) {
        if (n <= 1) return [1];
        let fib = [1, 1];
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib;
    }

    function aplicarJuros(valor, taxa, parcelas) {
        return valor * Math.pow(1 + (taxa / 100), parcelas);
    }

    function calcular() {
        let valor = parseFloat(valorInput.value);
        let parcelas = parseInt(parcelasInput.value);
        let juros = parseFloat(jurosInput.value) || 0;
        let modo = modoSelect.value;

        if (isNaN(valor) || isNaN(parcelas)) {
            alert("Preencha os dados!");
            return;
        }

        if (juros > 0) {
            valor = aplicarJuros(valor, juros, parcelas);
        }

        let fib = fibonacci(parcelas);
        if (modo === "decrescente") fib.reverse();

        let soma = fib.reduce((a, b) => a + b, 0);

        let resultadoHTML = "";
        let dadosFib = [];
        let dadosLinear = [];
        let labels = [];

        let linear = valor / parcelas;

        fib.forEach((f, i) => {
            let v = ((f / soma) * valor).toFixed(2);

            resultadoHTML += `<tr><td>${i+1}</td><td>R$ ${v}</td></tr>`;

            dadosFib.push(v);
            dadosLinear.push(linear.toFixed(2));
            labels.push("P" + (i+1));
        });

        resultado.innerHTML = resultadoHTML;

        gerarGrafico(labels, dadosFib, dadosLinear);
        salvarHistorico(valor, parcelas, modo);
    }

    function gerarGrafico(labels, fib, linear) {
        if (!window.Chart) return;

        if (chart) chart.destroy();

        chart = new Chart(grafico, {
            type: "line",
            data: {
                labels,
                datasets: [
                    { label: "Fibonacci", data: fib },
                    { label: "Linear", data: linear }
                ]
            }
        });
    }

    function salvarHistorico(valor, parcelas, modo) {
        let h = JSON.parse(localStorage.getItem("fibopay")) || [];

        h.push({ valor, parcelas, modo, data: new Date().toLocaleString() });

        localStorage.setItem("fibopay", JSON.stringify(h));
        carregarHistorico();
    }

    function carregarHistorico() {
        let h = JSON.parse(localStorage.getItem("fibopay")) || [];
        historico.innerHTML = "";

        h.reverse().forEach(i => {
            historico.innerHTML += `<li class="list-group-item">
                R$ ${i.valor} - ${i.parcelas}x (${i.modo})
            </li>`;
        });
    }

    document.getElementById("btnCalcular").addEventListener("click", calcular);

    document.getElementById("exportar").addEventListener("click", () => {
        const { jsPDF } = window.jspdf;
        let doc = new jsPDF();

        doc.text("FiboPay", 10, 10);

        let linhas = document.querySelectorAll("#resultado tr");
        let y = 20;

        linhas.forEach(l => {
            doc.text(l.innerText, 10, y);
            y += 10;
        });

        doc.save("fibopay.pdf");
    });

    document.getElementById("limpar").addEventListener("click", () => {
        localStorage.clear();
        carregarHistorico();
    });

    let valorInput = document.getElementById("valor");
    let parcelasInput = document.getElementById("parcelas");
    let jurosInput = document.getElementById("juros");
    let modoSelect = document.getElementById("modo");
    let resultado = document.getElementById("resultado");
    let grafico = document.getElementById("grafico");
    let historico = document.getElementById("historico");

    carregarHistorico();

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js");
    }
});
