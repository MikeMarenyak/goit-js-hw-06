const loginForm = document.querySelector('.login-form');
const submitBtn = loginForm.querySelector('button[type="submit"]');

loginForm.addEventListener('submit', (event) => {
event.preventDefault(); 

const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

if (emailInput.value === '' || passwordInput.value === '') {
    alert('Заповніть всі поля форми!');
    return;
}
const formData = {
    email: emailInput.value,
    password: passwordInput.value, 
};
        
 console.log(formData);
 loginForm.reset();
});