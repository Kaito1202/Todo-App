import './App.css';
import React,{useState,useEffect} from'react';
//コンポーネントをインポート
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //State
  const [inputText,setInputText] =useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus] =useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);

  //useEffect
  useEffect(()=>{
    filterHandler();
  },[todos,status]);
  //Functions
  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed===true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=>todo.completed===false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
     <header>
      <h1>Kaito's Todo List</h1>
    </header>
    <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
    <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
