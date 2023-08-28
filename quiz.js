const questions= [
    {
        question:"which is largest animal in the world",
        answers:[
            {Text:"shark",correct:false },
            {Text:"blue whale",correct:true },
            {Text:"elephant",correct:false },
            {Text:"buffalo",correct:false },
            {Text:"gillaffe",correct:false },
        ]
    },
    {
        question:"which is the smallest continent  in the world",
        answers:[
            {Text:"asia",correct:false },
            {Text:"africa",correct:false },
            {Text:"arctic",correct:false },
            {Text:"europe",correct:false },
            {Text:"austraria",correct:true },
        ]

    },
    {
        question:"this is not african  country",
        answers:[
            {Text:"rusia",correct:true },
            {Text:"south africa",correct:false },
            {Text:"tunisia",correct:false },
            {Text:"liberia",correct:false },
            {Text:"rwanda",correct:false },
        ]


    },
    {
        question:"this is  not the district of southern proovince",
        answers:[
            {Text:"muhanga",correct:false },
            {Text:"nyamagabe",correct:false },
            {Text:"nyaruguru",correct:false },
            {Text:"gisagara",correct:false },
            {Text:"rwamagana",correct:true },
        ]
    }
    ,{
        question:"in which continent does rwandas found on",
        answers:[
            {Text:"asia",correct:false },
            {Text:"africa",correct:true },
            {Text:"arctic",correct:false },
            {Text:"europe",correct:false },
            {Text:"austraria",correct:false },
            {Text:"rwanda",correct:false },
        ]


    }

];

const questionElement = document.getElementById("question");
const answerButtons  = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." +  currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML= answer.Text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;    
        }
    button.addEventListener("click",selectAnswer);
    
});
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
         selectedBtn.classList.add("correct");
         score++;
}
else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display= "block";

 }
 function showScore(){
    resetState(); 
     questionElement.innerHTML = `you scorwed ${score} out of ${questions.length}!`;
 nextButton.innerHTML = "play again";
 nextButton.style.display = "block"; 
    }
 function hadnleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){ 
        showQuestion();
    }
    else{
        showScore();
    }
 }
 nextButton.addEventListener("click",() =>{
    if(currentQuestionIndex < questions.length){
        hadnleNextButton();
    }
    else{
        startQuiz();
    }
 });
startQuiz();



