const password = document.getElementById("password");
document.getElementById("passwordContainer").addEventListener('click', e =>{
  const showPassword = document.getElementById("showPassword");
  const hidePassword = document.getElementById("hidePassword");
    if(e.target.id === "showPassword"){
    password.type = 'text'
    hidePassword.style.display = 'inline';
    showPassword.style.display = 'none'
   }
    if(e.target.id === "hidePassword"){
    password.type = 'password'
    hidePassword.style.display = 'none';
    showPassword.style.display = 'inline'
   }
})

function validation(value){
  return {
    size: value.length >= 8,
    upper: /[A-Z]/.test(value),
    lower: /[a-z]/.test(value),
    number: /[\d]/.test(value),
    special: /[^A-Za-z\d]/.test(value)
  }
}
password.addEventListener('input', e => {
  const resut = validation(e.target.value)
  const li = document.querySelectorAll('li');
  Array.from(li).forEach(list => {
    const field = list.dataset.field;
    if(!resut[field]) list.classList.remove('validColor')
      else list.classList.add('validColor');

  })
})
 


