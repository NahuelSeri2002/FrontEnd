import {useState } from 'react';
import './App.css'
import { mathOperations } from './utils/mathOperations';
import Input from './components/Input';

function App() {
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [resultado, setResultado] = useState (0)

  const handleNum2Change = (e) => {
    setNum2(Number(e.target.value))
  }

  const handleOperar = (operacion) => {

    let resultadoCalculado

    switch (operacion) {
      case "sumar":
        resultadoCalculado = mathOperations.suma(num1, num2)
        break;
      case "restar":
          resultadoCalculado = mathOperations.resta(num1, num2)
          break;
      case "multiplicar":
          resultadoCalculado = mathOperations.multiplicacion(num1, num2)
        break;
      case "dividir":
        resultadoCalculado = mathOperations.division(num1, num2)
        break;

      default: resultadoCalculado = 0
        break;
    }

    setResultado(resultadoCalculado)
    setNum1('')
    setNum2('')
  }

  return (
    <>
      <main className="app">
        <section className="tarjeta">

          <h1>Calculadora</h1>

          {/* <div className="campo">
            <label htmlFor="input-numero-1">Numero 1</label>
            <input type="number" id="input-numero-1" value={num1}
            placeholder='0'
            onChange={(evento) => setNum1(Number(evento.target.value))}/>
          </div>

          <div className="campo">
            <label htmlFor="input-numero-2">Numero 2</label>
            <input type="number" id="input-numero-2" value={num2}
            placeholder='0'
            onChange={handleNum2Change}/>
          </div> */}

          <Input evento={(e) => setNum1(Number(e.target.value))}
          label="Numero 1"
          labelId="input-numero-1"
          placeholder="0"
          type="number"
          value={num1}
          />

          <Input evento={handleNum2Change}
          label="Numero 2"
          labelId="input-numero-2"
          placeholder="0"
          type="number"
          value={num2}
          />


          <div className="botones">
            <button onClick={() => handleOperar("sumar")}>Sumar</button>
            <button onClick={() => handleOperar("restar")}>Restar</button>
            <button onClick={() => handleOperar("multiplicar")}>Multiplicar</button>
            <button onClick={() => handleOperar("dividir")}>Dividir</button>
          </div>

          <p className='resultado'> Resultado: <strong> {resultado} </strong></p>

        </section>
      </main>
    </>
  );
}

export default App
