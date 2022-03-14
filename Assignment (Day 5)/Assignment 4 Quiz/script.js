const quizData = [
        {
                 question: "1. How do you write 'Hello World' in an alert box? ",
                 a: "alertBox('Hello World')",
                 b: "msgBox('Hello World')",
                 c: "alert('Hello World')",
                 d: "msg('Hello World')",
                 correct: "c",
             },

             {
                question: "2. Which language runs in a web browser ?",
                a: "C",
                b: "JavaScript",
                c: "Python",
                d: "Java",
                correct: "b",
            },
        
            {
                question: "3. What does CSS stands for ?",
                a: "Cascading Simple Sheets",
                b: "Cars SUVs Sailboats",
                c: "Central Style Sheets",
                d: "Cascading Style Sheet",
                correct: "d",
            },
        
        
            {
                question: "4. What year was JavaScript launched? ?",
                a: "1995",
                b: "1994",
                c: "1996",
                d: "None of the above",
                correct: "a",
            },
        
            {
                question: "5. Inside which HTML element do we put the JavaScript? ?",
                a: "<js>",
                b: "<javascript>",
                c: "<scripting>",
                d: "<script>",
                correct: "d",
            },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>`
       }
    }
});