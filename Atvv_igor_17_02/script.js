// Criação de variáveis/Seleção
const btn = document.getElementById("btn")
const body = document.body

// Função para alternar o tema
function alternaTema() {
    // Vai verificar o tema que está no momento e depois vai mudar para o outro
    if (body.classList.contains('modo-claro')) {
        body.classList.remove('modo-claro')
        body.classList.add('modo-escuro')
        button.classList.remove('modo-claro')
        button.classList.add('modo-escuro')
    } else {
        body.classList.remove('modo-escuro')
        body.classList.add('modo-claro')
        button.classList.remove('modo-escuro')
        button.classList.add('modo-claro')
    }
}

// Evento de clique 
button.addEventListener('click', alternaTema)

// Definir o tema inicial, caso o usuário tenha preferência
if (localStorage.getItem('theme') === 'modo-escuro') {
    body.classList.add('modo-escuro')
    button.classList.add('modo-escuro')
} else {
    body.classList.add('modo-claro')
    button.classList.add('modo-claro')
}

// Salva a escolha do tema no localStorage
button.addEventListener('click', () => {
    if (body.classList.contains('modo-escuro')) {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.setItem('theme', 'light')
    }
});