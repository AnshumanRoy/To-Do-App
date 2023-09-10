import React, { useState } from 'react'
import TodoList from './components/TodoList'
import { v4 as uuid } from 'uuid';
import NewTodoForm from './components/NewTodoForm';

const App = () => {

  const work_arr = [
    {id:uuid(), task: "Go to gym", completed: true},
    {id:uuid(), task: "Go to sleep", completed: false},
    {id:uuid(), task: "Cook your meal", completed: false},
  ]

  const [work, setWork] = useState(work_arr);

  const handleDelete = (id) => {
    setWork(work.filter((item) => item.id != id));
  };

  const addTask = (desc) => {
    setWork([...work, {id: uuid(), task:desc, completed:false}])
  }

  return (
    <>
      <h1 style={{textAlign:'center', padding:20}}>To-Do-Matic</h1>
      <div className='container text-center'>
        <TodoList tasks = {work} handleDelete={handleDelete}/>
      </div>
      <div>
        <NewTodoForm handleAddTask={addTask}/>
      </div>
    </>
  )
}

export default App
