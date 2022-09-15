import {useState} from 'react';
import Header from './Components/Header';
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './Components/Modal';




function App() {
  
const [presupuesto,setPresupuesto] = useState(0);
const [isValidPresupuesto,setIsValidPresupuesto] = useState(false);
const [modal,setModal] = useState(false);
const [animarModal,setAnimarModal] = useState(false);





const handleNuevoGasto = () => {
  setModal(true)
  setTimeout(()=>{
   setAnimarModal(true)
  },500)
}


  return (
    <div className="App">
    <Header
    presupuesto={presupuesto}    // se pasan los props a los hijos.
    setPresupuesto={setPresupuesto}
    isValidPresupuesto={isValidPresupuesto}
    setIsValidPresupuesto={setIsValidPresupuesto}
    />
    {isValidPresupuesto && (
      <div className='nuevo-gasto'>
      <img src={IconoNuevoGasto} alt='img'
       onClick={handleNuevoGasto}/>
    </div>
    ) }

    {modal && <Modal 
                setModal={setModal}
                animarModal={animarModal}
                setAnimarModal={setAnimarModal}
                />}
    
      </div>
  )
}

export default App
