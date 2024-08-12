const botoesCarrosel = document.querySelectorAll('.botao');
const imagensCarrosel = document.querySelectorAll('.imagem');
const informacoesAtual = document.querySelectorAll('.informacoes');

botoesCarrosel.forEach((botao,indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();
        botao.classList.add('selecionado');

        desativarImagemAtualAtiva();
        imagensCarrosel[indice].classList.add('ativa')

        desativarInformacaoAtual();

        informacoesAtual[indice].classList.add('ativa');
    
    })
})

function desativarInformacaoAtual() {
    const informacaoAtiva = document.querySelector('.informacoes.ativa');
    informacaoAtiva.classList.remove('ativa');
}

function desativarImagemAtualAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

