import './CampoTexto.css'

const CampoTexto = ()=>{
  return (
    <div className="campo-texto">
      <label>Nome</label>
      <input 
      className="campo-texto" 
      type="text"
      placeholder='Digite seu nome'
      />
    </div>
  )
} 
export default CampoTexto