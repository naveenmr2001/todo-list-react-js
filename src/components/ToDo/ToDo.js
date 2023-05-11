import React, { useState } from 'react'
import AddingText from '../AddingText/AddingText'
import ToDoList from '../ToDoList/ToDoList';

const Todo = () => {
  const [toDos,setToDos] = useState([]);
  return (
    <>      
      <AddingText todo={toDos} settodos={setToDos} />
      <ToDoList todo={toDos}/>
    </>
  )
}

export default Todo
