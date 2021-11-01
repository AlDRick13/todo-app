import React, { useState, useEffect } from "react";
//styles
import './App.css';

//components
import Header from './components/Header';
import Todo from "./components/Todo";


function App() {
  //STATE
  const [todoList, setTodoList] = useState([]);
  const [showList, setShowList] = useState("All");
  //EFFECT

  useEffect(() => {
    const handleTodoList = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();
      const resultTodoList = result.slice(0, 20);
      // setTimeout(() => {
      setTodoList(resultTodoList);
      // }, 2000);
    };
    handleTodoList();
  }, []);
   //FUNCIONES
   const handleCompleteTodo = id => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleShowCompletedList = () =>{
    setShowList("Completed")
  }

  const handleShowUncompletedList = () =>{
    setShowList("Uncompleted")
  }

  const handleShowAllList = () =>{
    setShowList("All")
  }
  const list = () => {
    if (showList === "All"){
      return todoList.map (singleTodo =>
        <Todo
        key={singleTodo.id}
        title={singleTodo.title}
        status={singleTodo.completed}
        handleCompleteTodo={handleCompleteTodo}
        id={singleTodo.id}
        />)
    } if (showList === "Completed"){
      return todoList.filter(singleTodo => singleTodo.completed === true)
      .map(singleTodo => 
        <Todo
        key={singleTodo.id}
        title={singleTodo.title}
        status={singleTodo.completed}
        handleCompleteTodo={handleCompleteTodo}
        id={singleTodo.id}
        />
        )      
    } if (showList === "Uncompleted"){
      return todoList.filter(singleTodo => singleTodo.completed === false)
      .map(singleTodo => 
        <Todo
        key={singleTodo.id}
        title={singleTodo.title}
        status={singleTodo.completed}
        handleCompleteTodo={handleCompleteTodo}
        id={singleTodo.id}
        />
        )
      
    }
  }
  return (
    <div className="App">
      <div className="todo-container">
        <Header
        handleShowAllList={handleShowAllList}
        handleShowCompletedList={handleShowCompletedList}
        handleShowUncompletedList={handleShowUncompletedList}/>
        <div className="list-container">
          {todoList && todoList.length > 0 ? 
          list()
        
          : (
            <h4>Loading</h4>
            // <Loader />
          )}

        </div>
      </div>
    </div>
  );
}

export default App;
