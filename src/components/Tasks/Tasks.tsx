import Task from "../Task/Task"

const Tasks = ({ tasks, handleCompletion, handleDeletion }: any) => {
    // key é obrigatório para informar o react sobre o que fazer com o render
    return (<>
            <ul>
                {tasks.map((task: any) => <Task
                    key={task.id}
                    task={task}
                    handleCompletion={handleCompletion} 
                    handleDeletion={handleDeletion}/>)}
            </ul>
    </>)
}

export default Tasks;