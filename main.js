$(document).ready(function() {
    // Adiciona tarefa
    $('#form-contato').on('submit', function(event) {
        event.preventDefault();
        const taskText = $('#addTask').val();
        if (taskText) {
            $('#ul-task').append(`<li>${taskText}<button class="remove-task">Remover</button></li>`);
            $('#addTask').val(''); // Limpa o campo de entrada após adicionar a tarefa
        }
    });

    // Efeito de riscar o texto ao clicar
    $('#ul-task').on('click', 'li', function() {
        $(this).toggleClass('task-completed'); // Aplica ou remove a classe que risca o texto
    });

    // Remove tarefa
    $('#ul-task').on('click', '.remove-task', function(event) {
        event.stopPropagation(); // Evita que o evento de riscar o texto seja acionado
        $(this).parent().remove(); // Remove a tarefa da lista
    });

    // Limpa todas as tarefas
    $('#clear-task').on('click', function() {
        $('#ul-task').empty(); // Remove todos os itens da lista
    });
});
