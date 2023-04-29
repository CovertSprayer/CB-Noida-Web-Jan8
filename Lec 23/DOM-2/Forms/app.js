const usernameInp = document.querySelector('.username')
const passwordInp = document.querySelector('.password')
const btn = document.querySelector('.btn')

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e);
    console.log(usernameInp.value);
    console.log(passwordInp.value);

    usernameInp.value = '';
    passwordInp.value = '';
})