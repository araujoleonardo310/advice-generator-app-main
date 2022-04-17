// variables necessaries of manipulation
const main = document.getElementsByClassName("main")[0];
const mainBtn = document.querySelector("button");
const divider = document.querySelector(".divider");

// Requisitation and creation of elements
function fetchPhrase() {
  const createElementTitle = document.createElement("p");
  const createElementParagraph = document.createElement("p");
  main.insertBefore(createElementTitle, divider);
  main.insertBefore(createElementParagraph, divider);
  createElementTitle.classList.add("title");
  createElementParagraph.classList.add("content");
  createElementTitle.innerHTML = `adivice #`;
  createElementParagraph.innerHTML = `"`;

  fetch(`https://api.adviceslip.com/advice`, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      createElementTitle.innerHTML += `${data.slip.id}`;
      createElementParagraph.innerHTML += `${data.slip.advice}"`;
    });
}

// Validation if elements exists
function isCreateElements() {
  const contentTitle = document.getElementsByClassName("title")[0];
  const contentParagraph = document.getElementsByClassName("content")[0];
  return contentTitle && contentParagraph ? true : false;
}

// Button solicitation 
mainBtn.addEventListener("click", function () {
  //verificação de elementos existentes
  if (isCreateElements()) {
    const contentTitle = document.getElementsByClassName("title")[0];
    const contentParagraph = document.getElementsByClassName("content")[0];
    main.removeChild(contentTitle);
    main.removeChild(contentParagraph);
  }

  fetchPhrase();
});
