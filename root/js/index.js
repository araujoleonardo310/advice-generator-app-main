// variables global
const main = document.getElementsByClassName("main")[0];
const mainBtn = document.querySelector("button");
const divider = document.querySelector(".divider");


function fechAdvice() {
  const createElementTitle = document.createElement("p");
  const createElementParagraph = document.createElement("p");
  main.insertBefore(createElementTitle, divider);
  main.insertBefore(createElementParagraph, divider);
  createElementTitle.classList.add("title");
  createElementParagraph.classList.add("content");
  createElementTitle.innerHTML = `advice #`;
  createElementParagraph.innerHTML = `"`;

  fetch(`https://api.adviceslip.com/advice`, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      createElementTitle.innerHTML += `${data.slip.id}`;
      createElementParagraph.innerHTML += `${data.slip.advice}"`;
    });
}

//Checking existing elements
function isCreateElements() {
  const contentTitle = document.getElementsByClassName("title")[0];
  const contentParagraph = document.getElementsByClassName("content")[0];
  return contentTitle && contentParagraph ? true : false;
}

 
mainBtn.addEventListener("click", function () {  
  //Removing elements
  if (isCreateElements()) {
    const contentTitle = document.getElementsByClassName("title")[0];
    const contentParagraph = document.getElementsByClassName("content")[0];
    main.removeChild(contentTitle);
    main.removeChild(contentParagraph);
  }
  fechAdvice();
});
