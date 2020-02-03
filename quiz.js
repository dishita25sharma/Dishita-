const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
function buildQuiz(){}

function showResults(){}


buildQuiz();


submitButton.addEventListener('click', showResults);
const myQuestions = [
  {
    question: "Why p tag is used?",
    answers: {
      a: "for text",
      b: "for input",
      c: "for paragraph"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tag is used for inserting an image?",
    answers: {
      a: "p",
      b: "h1",
      c: "img"
    },
    correctAnswer: "c"
  },
  {
    question: "Tags used for making unordered list?",
    answers: {
      a: "li",
      b: "h1",
      c: "p",
      d: "ul"
    },
    correctAnswer: "d"
  }
];
console.log(myQuestions);
function buildQuiz(){
  
  const output = [];

  
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      const answers = [];

      for(letter in currentQuestion.answers){


        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  
  quizContainer.innerHTML = output.join('');
}
myQuestions.forEach( (currentQuestion, questionNumber) => {
  
});
function buildQuiz(){
  
  const output = [];

  
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      
      const answers = [];

      
      for(letter in currentQuestion.answers){

   
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

     
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

 
  quizContainer.innerHTML = output.join('');
}
myQuestions.forEach( (currentQuestion, questionNumber) => {
  
});

const answers = [];

for(letter in currentQuestion.answers){

  
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);


const answers = [];


for(letter in currentQuestion.answers){


  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}


output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);
quizContainer.innerHTML = output.join('');
quizContainer.innerHTML = output.join('');

function showResults(){

 
  const answerContainers = quizContainer.querySelectorAll('.answers');

 
  let numCorrect = 0;

  
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    
    if(userAnswer === currentQuestion.correctAnswer){
    
      numCorrect++;

         answerContainers[questionNumber].style.color = 'lightgreen';
    }
    
    else{
    
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const answerContainers = quizContainer.querySelectorAll('.answers');


let numCorrect = 0;

myQuestions.forEach( (currentQuestion, questionNumber) => {


  const answerContainer = answerContainers[questionNumber];
  const selector = `input[name=question${questionNumber}]:checked`;
  const userAnswer = (answerContainer.querySelector(selector) || {}).value;

  
  if(userAnswer === currentQuestion.correctAnswer){
  
    numCorrect++;

   answerContainers[questionNumber].style.color = 'lightgreen';
  }
  
  else{

    answerContainers[questionNumber].style.color = 'red';
  }
});

const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;

if(userAnswer === currentQuestion.correctAnswer){

  numCorrect++;


  answerContainers[questionNumber].style.color = 'lightgreen';
}
else{

  answerContainers[questionNumber].style.color = 'red';
}

resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

console.log(resultsContainer);
