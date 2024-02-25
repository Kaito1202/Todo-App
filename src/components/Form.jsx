import React from "react";

const Form = ({setInputText,inputText,todos,setTodos,setStatus})=>{
  const inputTextHandler = (e) =>{
    setInputText(e.target.value);
  };
  const submitTodoHandler=(e)=>{
    e.preventDefault();
    setTodos([...todos,{text:inputText,completed:false,id:Math.random()*1000}]);
    setInputText("");
  }
  const statusHandler=(e)=>{
    setStatus(e.target.value);
  };
  return(
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">全て</option>
          <option value="completed">完了済み</option>
          <option value="uncompleted">未完了</option>
        </select>
      </div>
    </form>

  );
}
export default Form;