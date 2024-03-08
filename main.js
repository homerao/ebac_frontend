$(document).ready(function(){
    $('#carousel-imagens').slick({autoplay:true})
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    })
    $('#telefone').mask('(00) 00000-0000')
    $('#cep').mask('00000-000')
    $('#cpf').mask('000.000.000-00')
    $('form').validate({
        rules:{ 
            nome:{ required:true}
            ,email: { required:true, email:true},
            telefone:{required:true}, cep: {required:true}, endereco:{required:true}
        }, 
        messages: 
        { nome:"Insira o seu nome completo",
          telefone: "Insira o seu telefone",
          email: "Digite um e-mail válido",
          cpf: "preencha o seu CPF",
          endereco:"Digite o seu endereço",
          cep:"Preencha o CEP da sua rua"}
        , submitHandler: function(form){
            console.log(form)
        }, invalidHandler: function(evento, validador){
            
        } })
$('.lista-veiculos button').click( function(){
    const destino = $('#contato')
    const veiculo = $(this).parent().find('h3').text()
    alert(veiculo)
    $('#veiculo-interesse').val(veiculo)
    $('html').animate({
        screenTop: destino.offset().top
    }, 1000)
})
})