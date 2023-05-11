import React,{useState} from 'react'

const AddingText = ({todo,settodos}) => {
    const [inputText,setInputText] = useState('');
    const handleClick = () =>{
      let check = false;
      [...todo].forEach((each)=>{
        each.task.includes(inputText)?check=true:check=false;
      })
      check ? settodos([...todo]) : settodos([...todo,{task:inputText}]);
      setInputText('');
    }
  return (
    <>
      <input placeholder='Type the todo task' id='inputFeild' value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
      <button onClick={()=>handleClick()}>Add Task</button>
    </>
  )
}

export default AddingText
