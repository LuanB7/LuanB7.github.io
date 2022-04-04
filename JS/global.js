//Função para abrir um link

function abrirLink(protocolo, url) {
    if (protocolo == 'https') {
        window.open('https://' + url)
    } else if (protocolo == 'http') {
        window.open('http://' + url)
    } else {
        alert('Luan, o protocolo setado no documento HTML não foi reconhecido como https ou http.')
    }
    
}


//Função para abrir o menu mobile

function MenuOpen(checkbox, menu, fundo_menu, botao) {
    setTimeout(function() {

        if (checkbox.checked) {
            menu.style.transform = 'translateX(0)';
            console.log('Menu aberto');
    
            fundo_menu.style.visibility = 'visible';
            fundo_menu.style.opacity = 1;
            document.body.style.overflow = 'hidden';
    
            botao.style.transform = 'rotate(-90deg)';
        } else {
            menu.style.transform = 'translateX(100%)';
            console.log('Menu fechado');
    
            fundo_menu.style.visibility = 'hidden';
            fundo_menu.style.opacity = 0;
    
            botao.style.transform = 'rotate(0)';
            document.body.style.overflow = 'visible';
        }
    

    }, 0001)

}




//Abrir modal de item do Portifólio

function abrirPortifolioModal(nome, conteudo, urlVerMais,imagemCaminho) {
    var pModal = document.getElementById('portifolio-item-modal');
    var pModalNome = document.getElementById('portifolio-item-modal-nome');
    var pModalConteudo = document.getElementById('portifolio-item-modal-p');
    var pModalImgBox = document.getElementById('portifolio-item-modal-img-box');
    var pModalVerMaisBtn = document.getElementById('portifolio-item-modal-botao-ver-mais');

    //substituir
    pModalNome.innerHTML = `${nome}`;
    pModalConteudo.innerHTML = `${conteudo}`;
    pModalImgBox.innerHTML = `<img src="${imagemCaminho}" alt="">`;

    var fundoEscuro = document.getElementById('menu-lateral-fundo-escuro');

    fundoEscuro.style.visibility = 'visible';
    fundoEscuro.style.opacity = '1';


    pModal.style.marginTop = '0';
    pModal.style.visibility = 'visible';
    pModal.style.opacity = '1';

    /*Botão ver mais*/
    pModalVerMaisBtn.onclick = function() {
        window.location.href = `${urlVerMais}`;

    }


}


//Fechar modal de item do Portifólio

function fecharPortifolioModal() {
    var pModal = document.getElementById('portifolio-item-modal');

    var fundoEscuro = document.getElementById('menu-lateral-fundo-escuro');

    fundoEscuro.style.visibility = 'hidden';
    fundoEscuro.style.opacity = '0';

    pModal.style.marginTop = '-10%';
    pModal.style.visibility = 'hidden';
    pModal.style.opacity = '0';
}

