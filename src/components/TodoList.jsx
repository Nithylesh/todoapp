import {TodoCard} from './TodoCard'

export function TodoList(props) {
    const {todos, selectedTab} = props
    const tab = selectedTab
    const filteredTodos = tab === 'All' ? todos :
    (tab === 'Active' ? todos.filter(val => !val.Completed) : todos.filter(val => val.Completed))

    return (
       <>
        {filteredTodos.map((todo, todoIndex) => {
            return (
                <TodoCard key={todoIndex}
                todoIndex={todos.findIndex(val => val.input == todo.input)}
                todo={todo}
                {...props}

                />
            )
        })}
       </>
    )
}