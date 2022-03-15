
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

    
    if(form.name.value.trim() === '') {
       return  setError(form.name, "This field can't be empty")

    
    }

    if(emailValue === '') {
       return  setError(email, "This field can't be empty")

    }
     if(!isValidEmail(emailValue)){
        return setError(email, "Please enter a valid email address.")

    }
     if(form.comName.value.trim() === '') {
        return setError(form.comName, "This field can't be empty")

     }
     if(form.message.value.trim() === '') {
        return setError(form.message, "This field can't be empty")

     }
        setSuccess(email)
     

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
