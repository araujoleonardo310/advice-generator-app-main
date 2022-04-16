
// Requisição e extração de dados
const api = new Request("https://api.adviceslip.com/advice")
fetch(api).then(response => response.json().then(data => data))