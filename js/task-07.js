const inputSize = document.querySelector('input#font-size-control');
const inputText = document.querySelector('span#text');

inputSize.addEventListener('input', event => {

    inputText.style.fontSize = `${event.target.value}px`;
}
)
