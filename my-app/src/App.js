import React, {useState, useEffect} from 'react';
import './App.css';

//Função de Calculo e resultado
function App() {
  const [nmr1,setNmr1] = useState(0);
  const [nmr2,setNmr2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operacao, setOperacao] = useState('Somar');

//const com as operações possiveis do app
  const calcular = () => {
    if (operacao=="Somar")
      return parseFloat(nmr1) + parseFloat(nmr2);
    else if (operacao=="Subtrair")
      return parseFloat(nmr1) - parseFloat(nmr2);
    else if (operacao=="Multiplicar")
      return parseFloat(nmr1) * parseFloat(nmr2);
    else if (operacao=="Dividir")
      return parseFloat(nmr1) / parseFloat(nmr2);
  }

  useEffect(()=>{
    setResultado(calcular())
  }, [nmr1,nmr2,operacao]);

  //retorno do calculo realizado
  return (
    <div className="App">
      <h1>CALCULADORA</h1>
      <label>Primeiro Numero</label>
      <input 
        type="number"
        value={nmr1}
        onChange={(e) => setNmr1(e.target.value)}/>

      <label>Segundo Numero</label>
      <input type="number"
        value={nmr2}
        onChange={(e) => setNmr2(e.target.value)}
      />

      <select onChange={(e) => setOperacao(e.target.value)}>
        <option>Somar</option>
        <option>Subtrair</option>
        <option>Multiplicar</option>
        <option>Dividir</option>     
      </select>

      <label>Resultado: {resultado}</label>      
    </div>
  );
}

export default App;