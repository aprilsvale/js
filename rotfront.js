            const questions = [
    {
        question: "Что из перечисленного не является конфетой РотФронт?",
        answers: [
            { text: "Москвичка;", correct: false },
            { text: "Барбарис;", correct: false },
            { text: "Лимончики;", correct: false },
            { text: "Мишка на Севере;", correct: true }
        ],
        type: "choice"
    },
    {
        question: "В каком году основали фабрику РотФронт?",
        answers: [
            { text: "1865", correct: false },
            { text: "1826", correct: true },
            { text: "1901", correct: false },
            { text: "1877", correct: false }
        ],
        type: "choice"
    },
    {
        question: "Какой логотив у РотФронт?",
        answers: [
            { text: "Красно-оранжевый с белыми буквами", correct: true },
            { text: "Бело-оранжевый с чёрными буквами", correct: false },
            { text: "Красно-синий с белыми буквами", correct: false },
            { text: "Красно-серый с чёрными буквами", correct: false }
        ],
        type: "choice"
    },
    {
        question: "Из чего сделан фантик для знаменитой кофеты из арахисовой пасты?",
        answers: [
            { text: "Пергамент", correct: true },
            { text: "Фольга", correct: false },
            { text: "Пластик", correct: false },
            { text: "Картон", correct: false }
        ],
        type: "choice"
    },
    {
        question: "Запишите, кто основал фабрику",
        correctAnswer: "Купцы Леновы",
        type: "input"
    }
];

const startBtn = document.getElementById('start-btn');
const startContainer = document.getElementById('start-container');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const inputContainer = document.getElementById('input-container');
const inputAnswer = document.getElementById('input-answer');
const submitAnswerBtn = document.getElementById('submit-answer');
const feedbackElement = document.getElementById('feedback');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const resultMessageElement = document.getElementById('result-message');
const restartBtn = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;

function handleSubmitAnswer() {
    const question = questions[currentQuestionIndex];
    const value = inputAnswer.value.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .replace(/\s+/g, ' ');
    
    if (!value) {
        inputAnswer.style.borderColor = 'red';
        feedbackElement.textContent = 'Хотели одурачить нас?!';
        return;
    } else {
        inputAnswer.style.borderColor = '';
        checkInputAnswer(question.correctAnswer);
    }
}

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startContainer.style.display = 'none';
    restartBtn.style.display = 'none';
    resultContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    feedbackElement.textContent = '';
    
    if (question.type === 'choice') {
        answersElement.textContent = '';
        inputContainer.style.display = 'none';
        answersElement.style.display = 'block';
        
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.addEventListener('click', function() {
                const allButtons = answersElement.querySelectorAll('button');
                allButtons.forEach(btn => {
                    btn.classList.add('disabled-button');
                    btn.classList.remove('correct-button');
                });
                selectAnswer(answer.correct, button);
            });
            answersElement.appendChild(button);
        });
    } else if (question.type === 'input') {
        answersElement.style.display = 'none';
        inputContainer.style.display = 'block';
        inputAnswer.value = '';
        
        if (!submitAnswerBtn.hasListener) {
            submitAnswerBtn.addEventListener('click', handleSubmitAnswer);
            submitAnswerBtn.hasListener = true;
        }
    }
}

function selectAnswer(isCorrect, button) {
    console.log('Button before:', button.className);
    if (isCorrect){
        feedbackElement.textContent = 'Гуд';
        score++;
        button.classList.add('correct-button');
        console.log('Button after adding class:', button.className);
    } else {  
        feedbackElement.textContent = 'Отнюдь!';
    }
    setTimeout(nextQuestion, 1000);
}

function checkInputAnswer(correctAnswer) {
    const userAnswer = inputAnswer.value.trim().toLowerCase();
    
    if (userAnswer === correctAnswer.toLowerCase()) {
        feedbackElement.textContent = 'Гуд!';
        score++;
    } else {
        feedbackElement.textContent = `Отнюдь! Правильный ответ: ${correctAnswer}`;
    }
    
    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    restartBtn.style.display = 'block';
    
    const percentage = Math.round((score / questions.length) * 100);
    scoreElement.textContent = `Вы ответили правильно на ${score} из ${questions.length} вопросов. (${percentage}%)`;
    
    if (percentage >= 80) {
        resultMessageElement.textContent = 'Отличный результат! Вы эксперт по РотФронт.';
    } else if (percentage >= 50) {
        resultMessageElement.textContent = 'Нехило, но не тру фан!';
    } else {
        resultMessageElement.textContent = 'Вы на карандаше... - извините(сь)';
    }
}

restartBtn.addEventListener('click', restartQuiz);

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = 'none';
    startContainer.style.display = 'block';
    
    submitAnswerBtn.removeEventListener('click', handleSubmitAnswer);
    submitAnswerBtn.hasListener = false;
}