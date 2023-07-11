// question bank 
let questionBank = [{
    question : "What tag is used to render an image on a webpage?",
    option : ["src","img","image","None of the above"],
    answer : "img"
},
{
    question : "Which of the following properties is used to change the font of text?",
    option : ["font-family","font-size","text-align","None of the above"],
    answer : "font-family"
},
{
    question : "Colors are defined in HTML using?",
    option : ["RGB Values","HEX Values","RGBA Values","All of the above"],
    answer : "All of the above"
},
{
    question : "Which of the following CSS style property is used to specify an italic text?",
    option : ["style","font","font-style","@font-face"],
    answer : "font-style"
},
{
    question : "Which of the following CSS property is used to set the color of the text?",
    option : ["text-decoration","pallet","colour","color"],
    answer : "color"
},
{
    question : "Javascript is an _______ language?",
    option : ["object-Oriented","object-Based","Procedural","None of the above"],
    answer : "object-Oriented"
},
{
    question : "How can a datatype be declared to be a constant type?",
    option : ["const","var","let","constant"],
    answer : "const"
},
{
    question : "When an operator's value is NULL, the typeof returned by the unary operator is:",
    option : ["Boolean","undefined","object","lnteger"],
    answer : "object"
},
{
    question : "Which of the following are closures in Javascript?",
    option : ["Variables","Functions","objects","All of the above"],
    answer : "All of the above"
},
{
    question : "Which of the following is not a Javascript framework?",
    option : ["Node","Vue","React","Cassandra"],
    answer : "Cassandra"
},
]

let question = document.getElementById("question");
let quizContainer = document.getElementById("quiz-container");
let scorecard = document.getElementById("scorecard");
let option0 = document.getElementById("option0");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
 let next = document.querySelector(".next");
 let points = document.getElementById("score");
 let span = document.querySelectorAll("span");

 let i=0;
 let score= 0;

//  function to display questions
function displayQuestion(){
    for(let a=0; a<span.length;a++){
        span[a].style.background = "none";
    }
    question.innerHTML = "Q."+(i+1)+' '+questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "question"+' '+(i+1)+' '
    + "of" +' ' + questionBank.length;
}

// function to calculate scores 

function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= "limegreen";
    }
    else{
        document.getElementById(e.id).style.background= "tomato";
    }
    setTimeout(nextQuestion,300);
}

// function to display next question 

function nextQuestion(){
    if(i<questionBank.length-1){
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML = score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block';
    }
}

// click events to next button 
next.addEventListener('click',nextQuestion);
 


// back to quiz button event  
function backToQuiz(){
    location.reload();
}


// function to check answers 
function checkAnswer(){
    let answerBank=document.getElementById('answerBank');
    let answers=document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(let a=0;a<questionBank.length;a++){
        let list= document.createElement('li');
        list.innerHTML=questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();