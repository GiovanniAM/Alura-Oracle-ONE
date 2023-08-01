import Botao from "../Botao/Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"


const Formulario = ()=>{
  
  const times = [
    'Omegas Verdes',
    'JuzeiroFC',
    'CandangosSC',
    'CampinhoCR',
    'BanguFCF'
  ]
  const posicoes = [
  'Pivô',
  'Ala Direito',
  'Ala Esquerdo',
  'Fixo',
  'Goleiro',
  'Comissão Tecnica'
  ]

  const aoSalvar = (evento)=> {
    evento.preventDefault()
  }

  return(
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar os dados do seu time</h2>
        <CampoTexto obrigatorio='True' placeholder='seu nome' label='Nome'></CampoTexto>
        <CampoTexto obrigatorio='True' placeholder='o endereço da imagem' label='Imagem'></CampoTexto>
        <ListaSuspensa obrigatorio='True' label='Função' itens={posicoes} ></ListaSuspensa>
        <ListaSuspensa obrigatorio='True' label='Time' itens={times} ></ListaSuspensa>
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario