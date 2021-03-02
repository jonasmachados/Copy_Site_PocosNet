var imagens = ["img/propaganda1.png", "img/propaganda2.png", "img/propaganda3.png", "img/propaganda4.png", "img/propaganda5.png", "img/propaganda6.png"];
var imagematual = 0;

function trocaimagem() {
 imagematual = (imagematual + 1) % 6;
document.querySelector('.imgPropaganda img'). src = imagens[imagematual];
}
setInterval(trocaimagem, 1500);