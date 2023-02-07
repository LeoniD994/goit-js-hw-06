const inputSize = document.querySelector('input#font-size-control');
const inputText = document.querySelector('span#text');

inputSize.addEventListener('input', element => {
    inputText.style.fontSize = `${element.currentTarget.value}px`
}
)
