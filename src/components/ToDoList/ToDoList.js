import React from 'react'

const ToDoList = ({todo}) => {
  return (
    <>
        {todo.map((item,index)=>(
            <div key={index} data-testid="taskid">{item.task}</div>
        ))}
    </>
  )
}

export default ToDoList
