let question = {
  "Who was the first president of USA?": "George Washington",
  "When was the Cold war": "1947-1991",
  "Who wrote the Declaration of Independence": "Thomas Jefferson",
  "Who was the second president of USA": "John Adams"


}
let data = Object.entries(question);
let count = 0;
let currIndex = 0;
const cardNumber = document.querySelector(".card-number");
const q = document.querySelector('.question');
const ans = document.querySelector('.answer');
const checkButton = document.querySelector('#check');
const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#prev');
const lastQuestion = document.querySelector('#last');
const firstQuestion = document.querySelector('#first');


function getQuestion(index) {
  q.innerHTML = `<h3>${data[currIndex][0]}</h3>`;
  ans.innerHTML = `<h3>${data[currIndex][1]}</h3>`
  cardNumber.textContent = `Card Number: ${currIndex + 1}`;
  document.getElementById("deck-total").textContent = `Total Cards: ${data.length}`

}
function nextCard() {
  currIndex++;
  if (currIndex >= data.length) {
    currIndex = 0;
  }
  getQuestion(currIndex);
  ans.style.display = 'none';
}
function previousCards() {
  currIndex--;
  if (currIndex >= data.length) {
    currIndex = 0;
  }
  getQuestion(currIndex);
  ans.style.display = 'none';

}

checkButton.addEventListener('click', function () {
  ans.style.display = (ans.style.display === "none") ? "block" : "none";
});
nextButton.addEventListener('click', nextCard);
lastQuestion.addEventListener('click', function () {
  currIndex = 3;
  getQuestion();

});
firstQuestion.addEventListener('click', function () {
  currIndex = 0;
  getQuestion();

});

previousButton.addEventListener('click', previousCards);
getQuestion(currIndex);


