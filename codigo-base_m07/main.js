
const error_message = "O valor de A é igual ou maior que o valor B"
const ok_message = "O valor de B é maior que o valor A"
const form = document.querySelector("#formulario")
form.addEventListener('submit', function(e){
    e.preventDefault()

    let form = document.querySelector("#formulario")
    let valorA = form.querySelector("#A").value
    let valorB = form.querySelector("#B").value
    let message = form.querySelector("#message")
    if(validaCampos(valorA, valorB)){
        message.innerHTML = ok_message;
        message.classList.remove('error-message') 
        message.classList.add('ok-message');
        
     } else {
        message.innerHTML = error_message;
        message.classList.remove('ok-message')
        message.classList.add('error-message')
     }
    console.log(valorA)
})

function validaCampos(a,b){
    let result = false
    if(a >= b){
      return result
    } else if(b > a) {
      return !result
    } 
}