const questions = [
    {
        question: "Who was the first President of India?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Dr. Rajendra Prasad", "Sardar Patel"],
        answer: 2
    },
    {
        question: "Which Indian freedom fighter was known as the 'Iron Man'?",
        options: ["Bhagat Singh", "Subhas Chandra Bose", "Sardar Patel", "Lala Lajpat Rai"],
        answer: 2
    },
    {
        question: "When did India gain independence from British rule?",
        options: ["1947", "1950", "1935", "1942"],
        answer: 0
    },
    {
        question: "The Battle of Plassey was fought in which year?",
        options: ["1757", "1761", "1857", "1805"],
        answer: 0
    },
    {
        question: "Who wrote the Indian National Anthem?",
        options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Mahatma Gandhi", "Sri Aurobindo"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const resultEl = document.getElementById('result');
const restartButton = document.getElementById('restart-button');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('list-group-item', 'list-group-item-action');
        optionButton.onclick = () => selectAnswer(index);
        optionsEl.appendChild(optionButton);
    });

    nextButton.style.display = 'none';
}

function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const buttons = optionsEl.getElementsByTagName('button');

    if (selectedIndex === currentQuestion.answer) {
        buttons[selectedIndex].classList.add('list-group-item-success');
        score++;
    } else {
        buttons[selectedIndex].classList.add('list-group-item-danger');
        buttons[currentQuestion.answer].classList.add('list-group-item-success');
    }

    for (let button of buttons) {
        button.disabled = true;
    }

    nextButton.style.display = 'block';
}

function showResult() {
    questionEl.textContent = '';
    optionsEl.innerHTML = '';
    resultEl.textContent = `You scored ${score} out of ${questions.length}!`;
    resultContainer.classList.remove('d-none');
    nextButton.style.display = 'none';
    
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('d-none');
    showQuestion();
});

showQuestion();



// what's i will do more in this Quiz-Website :- (1) I will add sign-in/up pages using php and mySQL 
//                for backend(storing data), Once a person sign-in(or register) then he/she start his/her quiz.

//                (2) Timer for whole quiz.
//                (3) If possible, then Show the speed-graph-table, accuracy-graph-table in result-container.