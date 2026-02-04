# Enquete
HTML, CSS, and JavaScript
# 🧠 Web Development Quiz

Um jogo de perguntas e respostas interativo focado em fundamentos de Desenvolvimento Web (HTML, CSS e JavaScript). Este projeto foi criado para praticar a manipulação do DOM e a lógica de estados em JavaScript.

## 🚀 Funcionalidades

* **Questões Dinâmicas:** 10 perguntas sobre tecnologias web.
* **Feedback Visual:** As opções mudam de cor (verde para correto, vermelho para incorreto) ao clicar.
* **Barra de Progresso:** Visualização em tempo real do progresso através do quiz.
* **Pontuação Acumulativa:** Sistema de pontos (10 pontos por resposta correta).
* **Reinício de Jogo:** Opção de tentar novamente após ver o resultado final.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura dos elementos e containers.
* **CSS3:** Estilização da interface e animações de feedback.
* **JavaScript (ES6+):** Lógica do jogo, manipulação de arrays e eventos do DOM.

## 📂 Estrutura do Código

O ficheiro principal de lógica contém:
1.  **`questions`**: Um array de objetos que armazena as perguntas, opções e o índice da resposta correta.
2.  **`loadQuestion()`**: Função responsável por limpar a tela e montar a nova pergunta.
3.  **`checkAnswer()`**: Valida se o utilizador acertou, atualiza o score e aplica classes CSS de feedback.
4.  **`updateProgressBar()`**: Calcula a percentagem de conclusão baseada no índice atual.

## ⚙️ Como Executar

1.  Certifica-te de ter um ficheiro `index.html` com os IDs correspondentes (`question`, `options`, `progress-bar`, etc.).
2.  Cria um ficheiro `style.css` para definir as classes `.correct`, `.wrong` e `.hidden`.
3.  Adiciona o código JavaScript num ficheiro `script.js` ou dentro da tag `<script>`.
4.  Abre o `index.html` no teu navegador preferido.

---
Desenvolvido com ❤️ como projeto de aprendizagem.
