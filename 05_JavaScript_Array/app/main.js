import { aplicarDesconto } from './metodoMap.js';
import { exibirOslivrosNaTela } from './metodoForEach.js';

export let livros = []
const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI(){
  const res = await fetch(endPointDaApi)
  livros = await res.json()
  let livrosComDesconto = aplicarDesconto(livros)
  exibirOslivrosNaTela(livrosComDesconto)
}