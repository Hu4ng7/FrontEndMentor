const numbers = document.querySelectorAll('.number');
const mainDiv = document.querySelector("#container");
const hiddenDiv = document.querySelector("#thanks");
const submit = document.querySelector('#submit');
const result = document.querySelector('#result');


numbers.forEach(mainDiv => {
    mainDiv.addEventListener('click', ()=> {
        result.innerHTML = mainDiv.value;
    })
})


submit.addEventListener('click', ()=> {
    mainDiv.classList.toggle("hidden");
    hiddenDiv.classList.toggle("hidden");
})
