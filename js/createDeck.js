const box_container = document.querySelector(".container");
const containers = document.querySelector('.containers');
const buttons = document.querySelector("#check");
const q = document.querySelector('.questions');
const ans = document.querySelector('.answers');
const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#prev');
const view = document.querySelector('.btns');
const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");
const errorMessage = document.getElementById("error");
const confirms = document.getElementById("confirm");
const lastQuestion = document.querySelector('#last');
const firstQuestion = document.querySelector('#first');
let data = sessionStorage.getItem("card");

if (data) {
  data = JSON.parse(data);
} else {
  data = [];
}

let currIndex = 0;
let cards = [];

function viewCard() {
  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();

  if (!question || !answer) {
    errorMessage.style.display = "block";
    errorMessage.innerText = "Please enter both a question and an answer.";
    return;
  }

  errorMessage.style.display = "none";

  const flashCard = {
    question,
    answer
  };
  data.push(flashCard);
  sessionStorage.setItem("card", JSON.stringify(data));


  createCards();
  confirms.style.display = "block";
  setTimeout(() => {
    confirms.style.display = "none";
  }, 2500);
  confirms.innerText = `Card added: “${question}”-> “${answer}”`;

  questionInput.value = "";
  answerInput.value = "";




}


function create() {
  box_container.style.display = "flex";
  view.style.display = "flex";

}

function createCards() {
  box_container.style.display = "none";
  containers.style.display = "block";
  nextButton.style.display = "inline-block";
  previousButton.style.display = "inline-block";
  firstQuestion.style.display = "inline-block";
  lastQuestion.style.display = "inline-block";
  buttons.style.display = "inline-block";
  view.style.display = "none";
  containers.innerHTML = "";
  cards = [];




  data.concat().reverse().forEach((cardData, index) => {
    const flashcard = document.createElement("div");
    flashcard.classList.add("flashcard");


    flashcard.innerHTML = `
      <div class="card-front"><h3>${cardData.question}</h3></div>
      <div class="hidden-div" style="display:none;"><h3>${cardData.answer}</h3></div>
      <div class="card-number">Card ${index + 1} of ${data.length} </div>
     
    `;

    containers.appendChild(flashcard);
    cards.push(flashcard);
    flashcard.style.display = "none";
  });

  currIndex = 0;
  cards.forEach(card => card.style.display = "none");

  if (cards[currIndex]) {
    const the_answer = cards[currIndex].querySelector(".hidden-div");
    cards[currIndex].style.display = "block";
    the_answer.style.display = "none";

    buttons.onclick = () => {
      if ((the_answer.style.display === "none")) {
        the_answer.style.display = "block"
      } else {
        the_answer.style.display = "none"
      }
    };
  }


}

function previous() {
  if (currIndex > 0) {
    currIndex--;
    cards.forEach(card => card.style.display = "none");
    if (cards[currIndex]) {
      const the_answer = cards[currIndex].querySelector(".hidden-div");
      cards[currIndex].style.display = "block";
      the_answer.style.display = "none";
      buttons.onclick = () => {
        if ((the_answer.style.display === "none")) {
          the_answer.style.display = "block"
        } else {
          the_answer.style.display = "none"
        }
      };
    }
  }
}
previousButton.addEventListener('click', previous);

function viewNextCard() {
  if (currIndex < data.length - 1) {

    currIndex++;
    cards.forEach(card => card.style.display = "none");
    if (cards[currIndex]) {
      const the_answer = cards[currIndex].querySelector(".hidden-div");
      cards[currIndex].style.display = "block";
      the_answer.style.display = "none";
      buttons.onclick = () => {
        if ((the_answer.style.display === "none")) {
          the_answer.style.display = "block"
        } else {
          the_answer.style.display = "none"
        }
      };
    }
  }
}
nextButton.addEventListener("click", viewNextCard);
if (data.length > 0) {

  createCards();
} else {

  containers.style.display = "none";
  box_container.style.display = "flex";
  view.style.display = "flex";
  firstQuestion.style.display = 'none';
  lastQuestion.style.display = 'none';

}
lastQuestion.addEventListener('click', function () {
  currIndex = cards.length - 1;
  cards.forEach(card => card.style.display = "none");
  const the_answer = cards[currIndex].querySelector(".hidden-div");

  if (cards[currIndex]) {
    cards[currIndex].style.display = "block";
    the_answer.style.display = "none";

    buttons.onclick = () => {
      if ((the_answer.style.display === "none")) {
        the_answer.style.display = "block"
      } else {
        the_answer.style.display = "none"
      }
    };
  }


});
firstQuestion.addEventListener('click', function () {
  currIndex = 0;
  cards.forEach(card => card.style.display = "none");
  const the_answer = cards[currIndex].querySelector(".hidden-div");

  if (cards[currIndex]) {
    cards[currIndex].style.display = "block";
    the_answer.style.display = "none";

    buttons.onclick = () => {
      if ((the_answer.style.display === "none")) {
        the_answer.style.display = "block"
      } else {
        the_answer.style.display = "none"
      }
    };
  }


});