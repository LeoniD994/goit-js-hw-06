let counterValue = 0;

let counter = document.querySelector('#value');
const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');


plusBtn.addEventListener("click", () => {
    counterValue += 1;
    counter.textContent = counterValue;
});
minusBtn.addEventListener("click", () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});


