

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto
}) => {



const handlePresupuesto = (e) =>{
  e.preventDefault();

  if(!presupuesto || presupuesto < 0){
alert("Presupuesto invalido")
return;
  }

  setIsValidPresupuesto(true)



}






  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form 
      onSubmit={handlePresupuesto}
      className="formulario">
        <div className="campo">
          <label>Definir presupuesto</label>
          <input 
          className="nuevo-presupuesto"
          type="number"
          placeholder="añade tu presupuesto"
          value={presupuesto}
          onChange={(e)=> setPresupuesto(Number(e.target.value))}
          />

        </div>
        <input 
          type="submit"
          value="añadir"
        />

      </form>
    </div>
  )
}

export default NuevoPresupuesto
