function criaCaixa() {

    var boxElement = document.createElement("div");
    boxElement.setAttribute('class', 'box');
    boxElement.setAttribute('style', 'background-color:#' + '#f00' + ';');
    boxElement.setAttribute("onclick", 'mudarCor(this)');

    var criarElemento = document.querySelector('#app');
    criarElemento.appendChild(boxElement);

}
function mudarCor(elemento) {

    var boxId = elemento.id;

    var boxSelector = document.querySelector("#" + boxId);
    boxSelector.setAttribute('style', 'background-color:#' + '#f00' + ';');

    console.log(boxId);

}