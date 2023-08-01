import { APIconectaAPI,  } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideos(evento){
  evento.preventDefault();
  const dadosPesquisa = document.querySelector('[data-pesquisa]').value;
  const busca = await APIconectaAPI.buscaVideos(dadosPesquisa);
  const lista = document.querySelector('[data-lista]');
  while(lista.firstChild){
    lista.removeChild(lista.firstChild);
  };
  busca.forEach(elemento => lista.appendChild(constroiCard(
    elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
  if(busca.length == 0){
    lista.innerHTML = `<h2 class='mensagem__titulo'>Não existem videos com a palavra "${dadosPesquisa}"</h2>`
  }
}
const botaoPesquisa = document.querySelector('[data-botao-pesquisa]');
botaoPesquisa.addEventListener('click', evento => buscarVideos(evento));