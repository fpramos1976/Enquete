const questions = [
    {
        q: "Qual é a função do 'DOM' no JavaScript?",
        options: ["Gerir bases de dados", "Representar a estrutura da página", "Estilizar componentes", "Compilar código C++"],
        answer: 1
    },
    {
        q: "Qual propriedade CSS controla o espaçamento entre o conteúdo e a borda?",
        options: ["Margin", "Border-spacing", "Padding", "Gap"],
        answer: 2
    },
    {
        q: "O que significa a sigla HTML?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Tool Multi Language", "Nenhuma das anteriores"],
        answer: 0
    },
    {
        q: "Qual o resultado de 'typeof []' em JavaScript?",
        options: ["Array", "Object", "List", "Undefined"],
        answer: 1 // Em JS, um array é tecnicamente um objeto
    },
    {
        q: "No CSS Flexbox, qual é o valor padrão de 'flex-direction'?",
        options: ["Column", "Row-reverse", "Row", "Stack"],
        answer: 2
    },
    {
        q: "Qual destes métodos adiciona um elemento ao FINAL de um array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: 0
    },
    {
        q: "Qual seletor CSS é usado para referenciar um ID específico?",
        options: [". (ponto)", "& (e comercial)", "@ (arroba)", "# (cardinal)"],
        answer: 3
    },
    {
        q: "Qual atributo HTML define o texto alternativo para uma imagem?",
        options: ["title", "src", "alt", "link"],
        answer: 2
    },
    {
        q: "O que faz o operador '===' em JavaScript?",
        options: ["Atribui um valor", "Compara apenas o valor", "Compara valor e tipo", "Verifica se é nulo"],
        answer: 2
    },
    {
        q: "Qual tag HTML é utilizada para inserir um ficheiro JavaScript externo?",
        options: ["<link>", "<javascript>", "<js>", "<script>"],
        answer: 3
    }
];


let currentIndex = 0;
let score = 0;
let canAnswer = true;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const progressEl = document.getElementById('progress');
const scoreEl = document.getElementById('score-display');
const gameScreen = document.getElementById('game');
const resultScreen = document.getElementById('result');

function loadQuestion() {
    canAnswer = true;
    const current = questions[currentIndex];
    
    questionEl.innerText = current.q;
    progressEl.innerText = `Pergunta ${currentIndex + 1} de ${questions.length}`;
    optionsEl.innerHTML = '';

    current.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index, btn);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected, btn) {
    if (!canAnswer) return;
    canAnswer = false;

    const correct = questions[currentIndex].answer;
    
    if (selected === correct) {
        score += 10;
        btn.classList.add('correct');
    } else {
        btn.classList.add('wrong');
        optionsEl.children[correct].classList.add('correct');
    }

    scoreEl.innerText = `Score: ${score}`;

    setTimeout(() => {
        currentIndex++;
        if (currentIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1200);
}

function showResults() {
    gameScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    document.getElementById('final-score').innerText = `Pontuação final: ${score} pontos!`;
}

function restartQuiz() {
    currentIndex = 0;
    score = 0;
    scoreEl.innerText = `Score: 0`;
    gameScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    loadQuestion();
}
// Selecionar o elemento da barra
const progressBar = document.getElementById('progress-bar');

function updateProgressBar() {
    // Cálculo: (pergunta atual / total de perguntas) * 100
    const progress = (currentIndex / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Atualiza a loadQuestion para chamar a barra
function loadQuestion() {
    canAnswer = true;
    const current = questions[currentIndex];
    
    updateProgressBar(); // <-- Chamar aqui para atualizar a barra
    
    questionEl.innerText = current.q;
    progressEl.innerText = `Pergunta ${currentIndex + 1} de ${questions.length}`;
    optionsEl.innerHTML = '';

    current.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index, btn);
        optionsEl.appendChild(btn);
    });
}

// Atualiza a restartQuiz para resetar a barra
function restartQuiz() {
    currentIndex = 0;
    score = 0;
    scoreEl.innerText = `Score: 0`;
    progressBar.style.width = `0%`; // Reset da barra
    gameScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    loadQuestion();
}

// No final do jogo (showResults), podes colocar a barra a 100%
function showResults() {
    progressBar.style.width = `100%`;
    gameScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    document.getElementById('final-score').innerText = `Pontuação final: ${score} pontos!`;
}

// Inicializar
loadQuestion();