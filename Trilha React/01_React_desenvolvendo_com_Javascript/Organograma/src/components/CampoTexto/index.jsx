import './CampoTexto.css'

const CampoTexto = (props)=>{
  const placeholder = `Digite o ${props.placeholder}`
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
      required={props.obrigatorio}
      className="campo-texto" 
      type="text"
      placeholder={placeholder}
      />
    </div>
  )
} 
export default CampoTexto