const url = "http://localhost:3000/questions"
const question = document.getElementById("question")
const alt1 = document.getElementById("alt1").addEventListener("click", CreateQuestion)
const alt2 = document.getElementById("alt2").addEventListener("click", CreateQuestion)
const alt3= document.getElementById("alt3").addEventListener("click", CreateQuestion)
const ans = document.getElementById("ans").addEventListener("click", Win)


async function getAllQuestions(){
  const response = await fetch(url)
  const data = await response.json(); 

  data.map((questions) => {
    question.innerHTML = questions.question; 
    alt1.innerHTML = questions.alternative1
    alt2.innerHTML = questions.alternative2
    alt3.innerHTML = questions.alternative3
    ans.innerHTML = questions.answer
  });   
}

getAllQuestions(); 


function CreateQuestion(){
  window.location.replace("http://localhost:5500/front-end/pages/lose.html"); 
}

function Win(){
  window.location.replace("http://localhost:5500/front-end/pages/win.html"); 
}