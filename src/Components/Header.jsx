import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto
}) => {

  return (
    <header>
        <h1>Planificador gastos</h1>

        {isValidPresupuesto ? ( 
         <ControlPresupuesto
         presupuesto={presupuesto}
         />
        ) : (  
          <NuevoPresupuesto
        presupuesto={presupuesto}    // se pasan los props a los hijos.
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        />
        )}
        
    </header>
  )
}

export default Header