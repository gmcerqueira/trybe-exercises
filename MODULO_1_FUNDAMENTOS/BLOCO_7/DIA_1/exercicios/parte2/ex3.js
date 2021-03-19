const counter = document.querySelector("#counter");
const counterBtn = document.querySelector("#btn-counter");

let clickCount = 0;

counterBtn.addEventListener('click', () => {
  clickCount+=1
  counter.innerHTML= clickCount
})
