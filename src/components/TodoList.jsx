import {TodoCard} from './TodoCard'

export function TodoList(props) {
    const {todos} = props
    const tab = 'All'
    const filteredTodos = tab === 'All' ? todos :
    (tab === 'Active' ? todos.filter(val => !val.Completed) : todos.filter(val => val.Completed))

    return (
       <>
        {filteredTodos.map((todo, todoIndex) => {
            return (
                <TodoCard key={todoIndex}
                todo={todo}
                />
            )
        })}
       </>
    )
}