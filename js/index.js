// variáveis
const API_AdviceSlip = new Request("https://api.adviceslip.com/advice");
const contentTitle = document.getElementsByClassName("title")[0]
const contentParagraph = document.getElementsByClassName("content")[0]
const mainBtn = document.querySelector("button")

// Requisição e extração de Frase e id
const fetchPhrase = () => {
  fetch(API_AdviceSlip).then(response => response.json().then(data => {
    contentTitle.textContent = `adivice #${data.slip.id}`
    contentParagraph.textContent = `"${data.slip.advice}"`;
  }))
}

// Buscando uma nova frase
// Nota: é precisa aguardar 2 segundos para obter uma nova frase na api
function NewPhrase(e) {
  e.preventDefault() 
  fetchPhrase()  
}

// Button Onclick
mainBtn.onclick = (e) => NewPhrase(e);

