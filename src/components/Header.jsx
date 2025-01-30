export function Header(props) {
    const {todos} = props;
    const todosLength = todos.length
    const isPlural = todosLength != 1
    const taskOrtasks = isPlural ? 'tasks' : 'task'
    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} remaining {taskOrtasks}.</h1>
        </header>
    );
}