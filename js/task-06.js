const validationInput = document.querySelector('#validation-input');


validationInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length == validationInput.getAttribute('data-length')) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
} else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
}
});

