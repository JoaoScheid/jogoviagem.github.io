const questions = [
    {
        question: "Qual é o principal rio que corta a cidade de São Paulo?",
        options: ["Rio Tietê", "Rio Pinheiros", "Rio Amazonas", "Rio São Francisco"],
        correctAnswer: "Rio Tietê"
    },
    // Adicione mais perguntas aqui
    {
        question: "Qual é o bairro conhecido por abrigar muitos imigrantes japoneses em São Paulo?",
        options: ["Pinheiros", "Moema", "Liberdade", "Vila Olímpia"],
        correctAnswer: "Liberdade"
    },
    {
        question: "Qual é o estádio de futebol mais famoso de São Paulo?",
        options: ["Estádio Allianz Parque", "Arena Corinthians", "Estádio do Pacaembu", "Estádio do Morumbi"],
        correctAnswer: "Estádio do Morumbi"
    },
    {
        question: "Em qual ano ocorreu a inauguração da Avenida Paulista?",
        options: ["1899", "1922", "1954", "1969"],
        correctAnswer: "1899"
    },
    {
        question: "Qual é o nome do famoso parque que fica localizado na zona sul de São Paulo?",
        options: ["Parque Ibirapuera", "Parque da Luz", "Parque Villa-Lobos", "Parque Burle Marx"],
        correctAnswer: "Parque Ibirapuera"
    },
    {
        question: "Quem nasce na cidade de São Paulo é chamado de?",
        options: ["Paulista", "Paulistano", "Vascaíno", "Carioca"],
        correctAnswer: "Paulistano"
    },
    {
        question: "Qual é o maior museu de arte do Brasil, localizado em São Paulo?",
        options: ["Museu do Ipiranga", "Museu de Arte Moderna de São Paulo (MAM)", "Museu de Arte Contemporânea (MAC)", "Museu de Arte de São Paulo (MASP)"],
        correctAnswer: "Museu de Arte de São Paulo (MASP)"
    },
    {
        question: "Qual é a data comemorada como o aniversário da cidade de São Paulo?",
        options: ["25 de janeiro", "7 de setembro", "12 de outubro", "20 de novembro"],
        correctAnswer: "25 de janeiro"
    },
    {
        question: "São Paulo é conhecida como:",
        options: ["Cidade Maravilhosa", "Cidade dos Anjos", "Terra da Garoa", "Cidade das Praias"],
        correctAnswer: "Terra da Garoa"
    },
    {
        question: "Quantos municípios fazem parte da Região Metropolitana de São Paulo?",
        options: ["18", "27", "39", "42"],
        correctAnswer: "39"
    },
    {
        question: "Qual é a praça mais famosa de São Paulo, conhecida por ser um importante ponto de encontro?",
        options: ["Praça da Sé", "Praça da Liberdade", "Praça da República", "Praça Charles Miller"],
        correctAnswer: "Praça da República"
    },
    {
        question: "Qual é o nome do tradicional teatro localizado no bairro da Bela Vista em São Paulo?",
        options: ["Teatro Amazonas", "Teatro Municipal", "Teatro Alfa", "Teatro Sérgio Cardoso"],
        correctAnswer: "Teatro Municipal"
    },
    {
        question: "Qual destes times de futebol foi fundado mais antigamente?",
        options: ["Corinthians", "Palmeiras", "SPFC", "Portuguesa"],
        correctAnswer: "Portuguesa"
    },
    {
        question: "Qual é o nome do famoso mercado municipal de São Paulo, conhecido por vender uma grande variedade de produtos?",
        options: ["Mercado Central", "Mercado Público", "Mercado de São Paulo", "Mercado Municipal Paulistano"],
        correctAnswer: "Mercado Municipal Paulistano"
    },
    // Adicione mais perguntas aqui
];


let currentQuestionIndex = 0;
let score = 0;

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const scoreDisplay = document.getElementById("score");
const optionsContainer = document.querySelector(".options");

function displayQuestion() {
    questionNumber.textContent = currentQuestionIndex + 1;
    questionText.textContent = questions[currentQuestionIndex].question;

    optionsContainer.innerHTML = "";

    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.addEventListener("click", checkAnswer);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
        score += 10;
        scoreDisplay.textContent = score;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        questionText.textContent = "Fim do jogo!";
        optionsContainer.innerHTML = "";
        document.getElementById("end-image").style.display = "block";
    }
}

displayQuestion();
