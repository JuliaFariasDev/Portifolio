/*
function mostrarCadastro(tipo) {
    document.getElementById("cadastro-livros").style.display = (tipo === "livros") ? "block" : "none";
    document.getElementById("cadastro-individuos").style.display = (tipo === "individuos") ? "block" : "none";
}
function mostrarCampos(tipo) {
    // Esconde todos os formulários primeiro
    document.querySelectorAll('.form-individuo').forEach(form => {
        form.style.display = "none";
    });

    // Exibe o formulário correto
    let formSelecionado = document.getElementById(`form-${tipo}`);
    if (formSelecionado) {
        formSelecionado.style.display = "block";
    }
    // Exibe ou oculta o botão "SALVAR" conforme necessário
    let botaoSalvar = document.querySelector('.div-button-submit');
    botaoSalvar.style.display = (formSelecionado && formSelecionado.style.display === "block") ? "block" : "none";
}
    */

/*
// Card confirmação
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Mostra o card
    const card = document.getElementById('card');
    card.classList.remove('hidden');

    // Limpa o formulário (opcional)
    this.reset();
});
*/

function mostrarCadastro(tipo) {
    // Mostrar os formulários
    document.getElementById("cadastro-livros").style.display = (tipo === "livros") ? "block" : "none";
    document.getElementById("cadastro-individuos").style.display = (tipo === "individuos") ? "block" : "none";


    
    // Selecionar todos os botões
    const botoes = document.querySelectorAll('.link-redicionamento');

    // Remover classe ativa de todos os botões
    botoes.forEach(botao => botao.classList.remove('ativo'));

    // Adicionar classe ativa ao botão clicado
    if (tipo === 'livros') {
        botoes[0].classList.add('ativo');
    } else if (tipo === 'individuos') {
        botoes[1].classList.add('ativo');
    }
}
window.onload = function () {
    mostrarCadastro('livros');
};
function mostrarCampos(tipo) {
    // Esconde todos os formulários primeiro
    document.querySelectorAll('.form-individuo').forEach(form => {
        form.style.display = "none";
    });

    // Exibe o formulário correto
    let formSelecionado = document.getElementById(`form-${tipo}`);
    if (formSelecionado) {
        formSelecionado.style.display = "block";
    }
    // Exibe ou oculta o botão "SALVAR" conforme necessário
    let botaoSalvar = document.querySelector('.div-button-submit');
    botaoSalvar.style.display = (formSelecionado && formSelecionado.style.display === "block") ? "block" : "none";
}


//BARA LATERAL
// Seleciona todos os ícones do menu
const icons = document.querySelectorAll('.menu-icon');
const sidebar = document.querySelector('.barra_lateral');

let lastHoveredLI = null; // Armazena o último item com hover "travado"

// Percorre todos os ícones do menu
icons.forEach(icon => {
    const defaultSrc = icon.getAttribute('data-default'); // Ícone padrão
    const hoverSrc = icon.getAttribute('data-hover');     // Ícone ao passar o mouse
    const li = icon.closest('li');                        // Item da lista pai

    // Quando o mouse entra no item
    li.addEventListener('mouseenter', () => {
        // Troca o ícone para o "hover"
        icon.src = hoverSrc;

        // Remove o hover travado do item anterior (se houver)
        if (lastHoveredLI && lastHoveredLI !== li) {
            lastHoveredLI.classList.remove('hover-lock');
            const lastIcon = lastHoveredLI.querySelector('.menu-icon');
            if (lastIcon) {
                lastIcon.src = lastIcon.getAttribute('data-default');
            }
        }

        // Aplica o hover "travado" no item atual
        li.classList.add('hover-lock');
        lastHoveredLI = li;
    });

    // Ao sair do item, não faz nada — o efeito continua travado
    li.addEventListener('mouseleave', () => {
        // Intencionalmente vazio: mantém o ícone alterado
    });
});

// Quando o mouse entra na barra lateral (como um todo), reseta o estado
sidebar.addEventListener('mouseenter', () => {
    if (lastHoveredLI) {
        lastHoveredLI.classList.remove('hover-lock');
        const lastIcon = lastHoveredLI.querySelector('.menu-icon');
        if (lastIcon) {
            lastIcon.src = lastIcon.getAttribute('data-default');
        }
        lastHoveredLI = null;
    }
});