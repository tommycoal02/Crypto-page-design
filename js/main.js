document.querySelector('#signUpButton').addEventListener('click', congratulate);
document.querySelector('#resubmit').addEventListener('click', formON)

const formOff = document.querySelector('#formy');

function congratulate(){
    let nameCollector = document.querySelector('#name').value;
    const resubmitBtn = document.querySelector('#resubmit');
    document.querySelector('#congrats').innerText = nameCollector;
    formOff.classList.add('hidden')
    resubmitBtn.classList.remove('hidden');

    console.log(nameCollector)
}

function formON(){
const onForm = document.querySelector('#formy');
const resubmitBtn = document.querySelector('#resubmit');
onForm.classList.remove('hidden')
// document.querySelector('#congrats').innerText = " ";
resubmitBtn.classList.toggle('hidden');

    
}