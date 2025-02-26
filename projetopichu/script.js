document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

function iniciarDesafio() {
    document.getElementById('resultado').innerHTML = "Desafio iniciado! Resolva o problema...";
}
