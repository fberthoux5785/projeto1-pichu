document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const menuToggle = document.getElementById('menu-toggle');
  const menuLinks = document.getElementById('menu-links');

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
    });
  }

  if (menuToggle && menuLinks) {
    menuToggle.addEventListener('click', function () {
      menuLinks.classList.toggle('active');
    });
  }
});

let desafiosResolvidos = 0;

function iniciarDesafio() {
  const resultado = document.getElementById('resultado');

  resultado.innerHTML = `
    <p><strong>Desafio:</strong> Some dois números e veja o resultado!</p>
    <input type="number" id="numero1" placeholder="Número 1" class="input-desafio">
    <input type="number" id="numero2" placeholder="Número 2" class="input-desafio">
    <button onclick="resolverDesafio()" class="btn-primary">Resolver</button>
  `;
}

function resolverDesafio() {
  const numero1 = parseFloat(document.getElementById('numero1').value);
  const numero2 = parseFloat(document.getElementById('numero2').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(numero1) || isNaN(numero2)) {
    resultado.innerHTML += `<p style="color: red;">⚠️ Por favor, insira números válidos!</p>`;
    return;
  }

  const soma = numero1 + numero2;
  desafiosResolvidos++;

  resultado.innerHTML = `
    <p>✅ O resultado da soma é <strong>${soma}</strong>.</p>
    <p>🎉 Você já resolveu <strong>${desafiosResolvidos}</strong> desafio(s)!</p>
    <button onclick="iniciarDesafio()" class="btn-primary">Novo Desafio</button>
    <button onclick="resetarDesafios()" class="btn-secondary">Resetar Contador</button>
  `;
}

function resetarDesafios() {
  desafiosResolvidos = 0;
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<p>🔄 O contador foi resetado. Clique em \"Iniciar Desafio\" para recomeçar!</p>`;
}
