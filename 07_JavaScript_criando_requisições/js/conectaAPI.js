async function listaVideos(){
  const conectaAPI = await fetch('http://localhost:3000/videos');
  const conectaAPIConvertida = await conectaAPI.json();
  return conectaAPIConvertida
}

//Função assíncrona que faz a conexao com a API e cria a requisicao post 
async function criaVideo(titulo, descricao, url, imagem){
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },  
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem
    })
  });
  if(!conexao.ok){
    throw new Error('não foi possivel enviar o vídeo')
  }
  const conexaoConvertida = await conexao.json()
  return conexaoConvertida
}

async function buscaVideos(termoDeBusca){
  const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
  const conexaoConvertida = conexao.json();
  return conexaoConvertida
}

export const APIconectaAPI = {
  listaVideos, criaVideo, buscaVideos
}