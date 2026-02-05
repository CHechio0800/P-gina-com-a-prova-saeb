const form = document.getElementById('cadastroForm');
const successMessage = document.getElementById('successMessage');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        // Simulação de cadastro
        console.log('Cadastro realizado!');
        console.log('Nome:', nome);
        console.log('Email:', email);

        // Salva dados
        localStorage.setItem('userName', nome);
        localStorage.setItem('userEmail', email);

        // Mostra mensagem de sucesso
        successMessage.classList.add('show');

        // Limpa formulário
        form.reset();

        // Redireciona para a página inicial (saeb/index.html)
        setTimeout(() => {
            window.location.href = '../saeb/index.html';
        }, 2000);
    });
}

// Efeito visual nos inputs
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.parentElement.parentElement.style.transform = 'scale(1.02)';
    });

    input.addEventListener('blur', function () {
        this.parentElement.parentElement.style.transform = 'scale(1)';
    });
});
