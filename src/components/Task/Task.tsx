import './Task.scss'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { GoTrashcan } from 'react-icons/go'
const Task = ({ task, handleCompletion, handleDeletion }: any) => {

    return (<>
        <div className="tasks-container">
            <li className="task"
                style={task.completed ? { color: 'black' } : {}}
                onClick={() => handleCompletion(task.id)}>
                {task.title}
                <span >
                    <IoIosCheckmarkCircleOutline className='not-checked'
                        style={task.completed ? { fill: '#79d50f' } : {}} />
                </span>
            </li>
            <button onClick={() => handleDeletion(task.id)}>
                <GoTrashcan className='trash' />
            </button>
        </div>
    </>)
}
//borderLeft: '10px solid #653aab' 
export default Task;