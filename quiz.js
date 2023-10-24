// Definir preguntas y respuestas
const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Londres", "París", "Madrid"],
        correctAnswer: 1 // Índice de la respuesta correcta (en este caso, París)
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        options: ["La Tierra", "Júpiter", "Marte"],
        correctAnswer: 1 // Índice de la respuesta correcta (en este caso, Júpiter)
    },
    {
        question: "¿Cuál es el animal terrestre más rápido?",
        options: ["Guepardo", "León", "Elefante"],
        correctAnswer: 0 // Índice de la respuesta correcta (en este caso, Guepardo)
    }
];

let currentQuestion = 0;
let score = 0;

// Función para cargar la pregunta actual
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");

    if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion].question;

        optionsElement.innerHTML = "";
        for (let i = 0; i < questions[currentQuestion].options.length; i++) {
            optionsElement.innerHTML += `<button onclick="checkAnswer(${i})">${questions[currentQuestion].options[i]}</button>`;
        }

        resultElement.textContent = "";
    } else {
        // El juego ha terminado
        questionElement.textContent = "¡Juego terminado!";
        optionsElement.innerHTML = "";
        resultElement.textContent = `Puntaje: ${score} de ${questions.length}`;
    }
}

// Función para verificar la respuesta
function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
        score++;
        document.getElementById("result").textContent = "¡Respuesta correcta!";
    } else {
        document.getElementById("result").textContent = "Respuesta incorrecta.";
    }

    currentQuestion++;

    // Cargar la siguiente pregunta
    setTimeout(loadQuestion, 1000);
}

// Iniciar el juego cargando la primera pregunta
loadQuestion();
