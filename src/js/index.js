/*
OBJETIVO 1 - quando o usuário clicar no botão ver treiler, devemos abrir a modal com o video trailer.

passo 1 - dar um jeito de pegar o elemento do botão 
passo 2 - dar um jeito de identifivar quando o usuário clicar no botão
pass 3 - dar um jeito de pegar o elemento na modal
passo 4 - abrir modal na tela

OBJETIVO 2 - quando o usuário clicar no x devemos fechar a modal

pass 1 - dar um jeito de pegar o elemento de fechar
passo 2 - dar um jeito de identificar quando o usuario clicar no fechar
passo 3 - fechar a modal

*/

const botaoTreiler = document.querySelector(".botao-treiler");

const modal = document.querySelector(".modal");

const botaoFecharModal = document.querySelector(".fechar-modal");

const video = document.getElementById("video");

const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTreiler.addEventListener("click", () => {
   alternarModal();
   video.setAttribute("src", linkDoVideo);  
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});






