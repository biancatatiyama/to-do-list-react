import { useState } from "react";
import './AddTask.scss'
const AddTask = ({ handleAddTask }: any) => {
    const [input, setInput] = useState('')

    const handleClick = () => {
        if (input === '') {
            alert('Fullfill the field.')
        } else {
            handleAddTask(input)
            setInput('')
        }
    }
    return (<>
        <div className="header-container">
            <input className="input-container" type="text"
                onChange={(e) => setInput(e.target.value)}
                placeholder="next task..."
                value={input} />
            <button className="add-button" onClick={handleClick}>ADD</button>
        </div>
    </>)
}
export default AddTask;