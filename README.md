# 💸 FiboPay PRO
> **Transformando a Sequência de Fibonacci em uma nova forma de parcelamento inteligente.**

![GitHub repo size](https://img.shields.io/github/repo-size/josehenriqueprogramador/fibopay?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/josehenriqueprogramador/fibopay?style=for-the-badge&color=6366f1)
![GitHub stars](https://img.shields.io/github/stars/josehenriqueprogramador/fibopay?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/josehenriqueprogramador/fibopay?style=for-the-badge)
![License](https://img.shields.io/github/license/josehenriqueprogramador/fibopay?style=for-the-badge)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-orange?style=for-the-badge)

---

## 🎬 Preview

![FiboPay Preview](./assets/preview.gif)

---

## ✨ Visão Geral

O **FiboPay PRO** é um simulador financeiro inovador que redefine o conceito de parcelamento.

Ao invés de dividir valores de forma linear, o sistema utiliza a **Sequência de Fibonacci** para gerar parcelas dinâmicas, criando um modelo mais flexível, inteligente e alinhado com a realidade financeira do usuário.

💡 **Resultado:** pagamentos que acompanham a evolução da capacidade financeira.

---

## 🚀 Diferenciais

- 📈 **Parcelas Crescentes**  
  Comece pagando menos e aumente gradualmente

- 📉 **Modelo Decrescente**  
  Reduza o impacto futuro com pagamentos iniciais maiores

- 📊 **Visualização Inteligente**  
  Compare facilmente Fibonacci vs modelo linear

- 📱 **PWA (Progressive Web App)**  
  Instale no dispositivo e utilize offline

- 📄 **Exportação em PDF**  
  Gere relatórios profissionais das simulações

---

## 🧠 Lógica Matemática

O modelo utiliza distribuição proporcional baseada em pesos da sequência:

### 1. Sequência
$F = \{f_1, f_2, \dots, f_n\}$

### 2. Soma dos Pesos
$S = \sum_{i=1}^{n} f_i$

### 3. Parcela
$$P_i = \left( \frac{f_i}{S} \right) \cdot V$$

📌 Onde:
- $P_i$ = valor da parcela  
- $f_i$ = termo da sequência  
- $S$ = soma total  
- $V$ = valor total  

---

## 🧪 Como Usar

1. Insira o valor total  
2. Escolha o número de parcelas  
3. Selecione o modelo:
   - Fibonacci crescente  
   - Fibonacci decrescente  
4. Visualize o gráfico comparativo  
5. Exporte em PDF (opcional)

---

## 💡 Casos de Uso

- 💳 Fintechs e soluções de crédito  
- 🛒 Plataformas de e-commerce  
- 🎓 Simuladores educacionais  
- 📊 Planejamento financeiro pessoal  

---

## 🛠️ Stack Tecnológica

| Camada       | Tecnologia                     |
|-------------|-------------------------------|
| Frontend    | HTML5, CSS3, Bootstrap 5      |
| Lógica      | JavaScript (ES6+)             |
| Gráficos    | Chart.js                      |
| Relatórios  | jsPDF                         |
| Arquitetura | PWA (Service Workers & Manifest) |

---

## ⚙️ Execução

```bash
# Clone o repositório
git clone https://github.com/josehenriqueprogramador/fibopay.git

# Entre na pasta
cd fibopay

# Abra no navegador
open index.html
```

---

## 🗺️ Roadmap

- [ ] Integração com APIs de crédito  
- [ ] Simulação com juros reais  
- [ ] Dashboard analítico (BI)  
- [ ] Backend com persistência (Node.js / Python)  
- [ ] Autenticação de usuários  

---

## 👨‍💻 Autor

**José Henrique Jardim**  
Desenvolvedor de Software | Data Science  

🔗 LinkedIn: https://linkedin.com/in/seu-link  
📺 YouTube: https://youtube.com/@caminho_do_codigo  

---

## 📺 Processo de Desenvolvimento

[![Assista no YouTube](https://img.youtube.com/vi/OoMf_wjj3Nc/0.jpg)](https://youtu.be/OoMf_wjj3Nc)

---

## 📄 Licença

Este projeto está sob a licença MIT.  
Consulte o arquivo `LICENSE` para mais informações.

---

> 💡 **FiboPay PRO — Onde matemática encontra estratégia financeira.**