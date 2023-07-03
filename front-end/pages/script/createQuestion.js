const subButton = document.getElementById("subButton").addEventListener("click", CreateQuestion); 
const question = document.getElementById("question")
const alt1 = document.getElementById("alt1")
const alt2 = document.getElementById("alt2")
const alt3= document.getElementById("alt3")
const ans = document.getElementById("ans")

async function CreateQuestion(){
  await fetch("http://localhost:3000/questions/create", {
    method: "POST",
    headers: {
      'Accept': 'application/json', 
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      question: question.value,
      alt1: alt1.value,
      alt2: alt2.value,   
      alt3: alt3.value,
      ans: ans.value,
  })
  })
}