import { useEffect, useState } from "react";
import "./App.css"


function App() {
  
  const[ listaTarefas, setListaTarefas ] = useState([]);
  const[tarefa, setTarefa] = useState({id:'' , texto:"", status:""});

  function addTarefa()
  {
    if(tarefa.texto!== ""){
      setListaTarefas([...listaTarefas, tarefa]);
    }
    
  }

  function excluirTarefa(id)
  {
     const novaLista = listaTarefas.filter( (tarefa) => tarefa.id !==id);
     setListaTarefas( novaLista );
  }

  function statusTarefa(id , status)
  {
    const index = listaTarefas.findIndex((tarefa) => tarefa.id === id);
    listaTarefas[index].status = !status;
    setListaTarefas([...listaTarefas]);
  }
  
  
  useEffect( ()=>{
    setTarefa({id: "", texto:""});
  },[listaTarefas])
  
  return (
   <>
   <div className="geral">
   <div className="caixa">
   <header className="texto">
    <h1>To do List</h1>
    <h2>Trabalhos Avaliativos</h2>
   </header>
   </div>
   
      <div className="texto">
        <input className="tarefa" type="text" name="tarefa" placeholder="Digite seus trabalhos" value={tarefa.texto} onChange={(e) => setTarefa( {id: Math.random(),texto:e.target.value, status: false})}/>
        <button className="adiciona" onClick={addTarefa}> ✚ </button>
      
        </div>
        <div className="nome">
          <ul>
              {listaTarefas.map((item, index)=>(
                <li className ="itens" key={index}>{item.texto} <button onClick={()=> statusTarefa(item.id, item.status)}>{item.status ? "☑":"⊗"}</button> <button onClick={()=> excluirTarefa(item.id)} >🗑️</button></li>
              ))}
          </ul>
          <ul>
              <button className="botao">Salvar Lista</button>
              
          </ul>
        </div>
        <header className="caixa1">
       <h2>*️⃣  📎</h2>
        </header>
   </div>
   
   </>
  );
}

export default App;
