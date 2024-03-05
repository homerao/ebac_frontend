$('document').ready(function(){
    $('form').on('submit',function(e){
        e.preventDefault();
        const tarefa = $('#nome-tarefa').val().toUpperCase()
        const li = $(`<li>${tarefa}</li>`)
        $(li).appendTo('#lista-tarefas')
        $(li).fadeIn()
        $('#nome-tarefa').val('')

    })


    $('#lista-tarefas').click(function(event){
        $(event.target).css('text-decoration','line-through')
    })     
        

   
    
})

