export function TodoCard(props) {
    const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo } = props

    return (
        <div className="todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button className="button-success" onClick={() => {
                    handleCompleteTodo(todoIndex)
                }} disabled={todo.complete}>
                    <i class="fa-solid fa-check"></i>
                </button>
                <button className="button-danger" onClick={() =>{
                    handleDeleteTodo(todoIndex)
                }}>
                    <i class="fa-solid fa-minus"></i>
                </button>
            </div>
        </div>
    )
}