const inputSize = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');

inputText.style.fontSize = inputSize.value + `px`;

inputSize.addEventListener("input", event => inputText.style.fontSize = event.currentTarget.value + `px`);
