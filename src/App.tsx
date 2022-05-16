import React, { useState } from 'react';
import AddTask from './components/AddTask/AddTask';
import Tasks from './components/Tasks/Tasks';
import './styles/App.scss';

interface tasksProps {
  title: string,
  id: number,
  completed: boolean,
}

function App() {
  const [tasks, setTasks] = useState<any>([{
    title: 'do groceries',
    id: 1,
    completed: false,
  }, {
    title: 'study react js',
    id: 2,
    completed: true,
  }])

  const handleAddTask = (input: tasksProps) => {
    const AddTask = [...tasks, {
      title: input,
      id: Math.random(),
      completed: false,
    }]
    setTasks(AddTask)
  }

  const handleCompletion = (taskId: number) => {
    const CompleteTask = tasks.map((task: tasksProps) => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      return task
    })
    setTasks(CompleteTask)
  }

  const handleDeletion = (taskId: number) => {
    const DeleteTask = tasks.filter((task: tasksProps) => task.id !== taskId)
    if (window.confirm('Are you sure you want to delete the choosen task?')) {
      setTasks(DeleteTask)
    }
  }

  return (
    <div className="App">
      <AddTask handleAddTask={handleAddTask} />
      <Tasks tasks={tasks}
        handleCompletion={handleCompletion}
        handleDeletion={handleDeletion} />
    </div>
  );
}
export type { tasksProps }
export default App;

/* 
const DeleteTask = tasks.filter((task: tasksProps) => task.id !== taskId)
    setTasks(DeleteTask)
*/