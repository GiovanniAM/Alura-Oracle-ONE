import { livros } from './main.js';
import { exibirOslivrosNaTela } from './metodoForEach.js';
import { elementoComValorDeLivrosDisponiveis } from './metodoForEach.js';
import { calcularValorTotalDeLivrosDisponiveis } from './metodoReduce.js'; 

const btn = document.querySelectorAll('.btn')
btn.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
  const elementBtn = document.getElementById(this.id)
  const categoria = elementBtn.value
  let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
  exibirOslivrosNaTela(livrosFiltrados)
  if(categoria == 'disponivel'){
    const valorTotal =  calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
    exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal )
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter(livro => {
    return livro.categoria == categoria;
  });
}

function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
  elementoComValorDeLivrosDisponiveis.innerHTML = `
  <div class="livros__disponiveis">
  <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
  `
}
