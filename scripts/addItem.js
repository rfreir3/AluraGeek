import { lista } from './conectaApi.js';

const add = document.querySelector('#adicionar');

add.addEventListener('click', (event) => {
    event.preventDefault();

    const nome = document.querySelector('#pnome').value;
    const preco = document.querySelector('#ppreco').value;
    const imagem = document.querySelector('#pimagem').value;

    lista.criaItem(nome, preco, imagem);
});

const limpa = document.querySelector('#limpar');

limpa.addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelector('#pnome').value = "";
    document.querySelector('#ppreco').value = "";
    document.querySelector('#pimagem').value = "";
});
