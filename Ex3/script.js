function setLoad() {
    var img = document.createElement("IMG");
    img.src = "loading.gif";
    document.getElementById('imagedetails').appendChild(img);
    setInterval(() => {
        document.getElementById('imagedetails').innerHTML = 'Carregado com sucesso';
    }, 500); 
}


// <!-- 
// Crie uma página HTML com um parágrafo e um botão Carregar que ao ser clicado
// adicionará uma imagem “carregando” ao parágrafo e executar uma função que após
// 500ms removerá a imagem carregando e adicionará a frase “Carregado com
// sucesso”
//  -->