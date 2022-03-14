
const form = document.getElementById('form')
const email = document.getElementById('email');



form.addEventListener('submit', e => {

    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControls = element.parentElement;
    const errorDisplay = inputControls.querySelector('.error')

    errorDisplay.innerText = message;
    inputControls.classList.add('error');
    inputControls.classList.remove('success')

}

const setSuccess = element =>{
    const inputControls = element.parentElement;
    const errorDisplay = inputControls.querySelector('.error')

    errorDisplay.innerText = '';
    inputControls.classList.add('success');
    inputControls.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
const validateInputs = () => {
    const emailValue = email.value.trim();

    // const email2Value = email2.value.trim();

    

    if(emailValue === '') {
        setError(email, "This field can't be empty")

    
    }else if(!isValidEmail(emailValue)){
        setError(email, "Please enter a valid email address.")

    } else {
        setSuccess(email)
    }   

};

const openMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
const dropMenu = document.querySelector('.mobile');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    dropMenu.style.display = 'block';
    dropMenu.style.top = '263';
}

function close(){
    dropMenu.style.display= 'none';
}

