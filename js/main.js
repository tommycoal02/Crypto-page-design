document.querySelector('#signUpButton').addEventListener('click', congratulate);


const formOff = document.querySelector('#formy');

function congratulate(){
    let nameCollector = document.querySelector('#name').value;
    const thankYouPage = document.querySelector('#thankYouPage');
    document.querySelector('#congrats').innerText = nameCollector;
    formOff.classList.add('hidden')
    thankYouPage.classList.remove('hidden');

    console.log(nameCollector)
}
