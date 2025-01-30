export function TodoCard(props) {
    const {todo} = props
    
    console.log('Todos:', todo);


    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button disabled={todo.Completed}>
                    <h6>Done</h6>
                </button>
                <button>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}