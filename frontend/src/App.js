import React, {useState} from 'react';
import Header from './Header'
//componente = função que retorna html

//JSX (JavaScript XML) = html escrito dentro de um arquivo JavaScript

function App() {
  const[counter, setCounter] = useState(0);

  //retorna array, [valor, funçãoDeAtualização]

  function increment(){
    setCounter(counter + 1);
  }

  return (
    <div>
      <header>Contador: {counter}</header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
