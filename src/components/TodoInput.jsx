import { useState } from "react"


export function TodoInput(props) {
    const {handleaddTodo} = props
    const [inputValue, setInputValue] = useState('')

    return (
        <div>
            <input type="text" value={inputValue} 
            onChange={(e)=>{setInputValue(e.target.value)}} 
            placeholder="Enter a new task" />
            <button onClick={()=>{ 
                if (!inputValue) {return}
                handleaddTodo(inputValue)
                setInputValue('')
            }}>
            <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}