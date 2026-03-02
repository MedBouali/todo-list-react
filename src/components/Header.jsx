export function Header(props) {
    return (
        <header>
            <div className="header-container">
                <div className="center">
                    <h1 className="text-gradient">Momentum</h1>
                </div>
                <div className="center">
                    <p>Build daily consistency with simple planning and streak tracking.</p>
                </div>
            </div>
            <div className="task-container">
                <div className="card-sm center">
                    <p className="">You have <strong>{todosLength}</strong> open {taskOrTasks}.</p>
                </div>
            </div>
        </header>
    )
    }