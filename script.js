const questions = [
    {
        question: "A mother her little daughter and her just born infant boy together stood on a weighing machine which shows 74kgs.how much does the daughter weigh if the mother weighs 46kg more than the combined weight of daughter and the infant and the infant weighs 60% less than the daughter?",
        answers:[
        
                {text:"9", correct: false},
                {text:"11", correct: false},
                {text:"Cannot be determind", correct: false},
                {text:"10", correct: true}
               ]
    },
    {
        question: "Mr.Govind was a building contractor. He was doing reasonably well in his business but was always on an expansion mode.Mr.Govind won a contract with the Corporation and his business began to boom. So he decided to deploy more people in his projects. If he were to increase his labour force by 33.33%, what will be percentage reduction in the work load of each employee?",
        answers:[

                {text:"75", correct: false},
                {text:"50", correct: false},
                {text:"25", correct: true},
                {text:"33.33", correct: false}
                ]
    },
    { 
        question: "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case.",
        answers:[
            {text:"4", correct: true},
            {text:"7", correct: false},
            {text:"9", correct: false},
            {text:"13", correct: false}
               ]
    },
    {
        question: "Which of the following fraction is the largest ?",
        answers:[
                {text:"7/8", correct: true},
                {text:"13/16", correct: false}, 
                {text:"31/40", correct: false},
                {text:"63/80", correct: false}
                ]
    },
    {
        question: "The least perfect square, which is divisible by each of 21, 36 and 66 is:",
        answers:[
                {text:"213444", correct: true},
                {text:"214344", correct: false},
                {text:"214434", correct: false},
                {text:"231444", correct: false}
                ]
    },
    {
        question: "If 20% of a = b, then b% of 20 is the same as:",
        answers:[
                {text:"5% of a", correct: false},
                {text:"20% of a", correct: false},              
                {text:"None of these", correct: false},
                {text:"4% of a", correct: true}
                ]
    },
    {
        question: "If A = x% of y and B = y% of x, then which of the following is true?",
        answers:[
                {text:"A is smaller than B.", correct: false},
                {text:"A is greater than B", correct: false},           
                {text:"Relationship between A and B cannot be determined.", correct: false},
                {text:"None of these", correct: true}
                ]
    },
    {
        question: "3 pumps, working 8 hours a day, can empty a tank in 2 days. How many hours a day must 4 pumps work to empty the tank in 1 day?",
        answers:[
                {text:"9", correct: false},
                {text:"10", correct: false},  
                {text:"11", correct: false},
                {text:"12", correct: true}
                ]
    },
    {
        question: "One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in:",
        answers:[
                {text:"81 min.", correct: false},
                {text:"108 min.", correct: false},   
                {text:"144 min.", correct: true},
                {text:"192 min.", correct: false}
                ]
    },
    {
        question: "  A motorboat, whose speed in 15 km/hr in still water goes 30 km downstream and comes back in a total of 4 hours 30 minutes. The speed of the stream (in km/hr) is:",
        answers:[
                {text:"4", correct: false},
                {text:"5", correct: true},              
                {text:"6", correct: false},
                {text:"10", correct: false}
                ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score =0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display= "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(event){
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display= "block"
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You score ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display= "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz(); 

    }
});
startQuiz(); 



