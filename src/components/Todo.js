import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Todo = (props) => {
    const [todo, setTodo] = useState(props)
    return (
        <div className='col'>
            <div className='d-grid gap-2' style={{padding:5}}>
                <button className='btn btn-primary' onClick={()=>setTodo({...todo, completed: !todo.completed}) } style={ {backgroundColor: 'black',textDecoration: `${todo.completed ? 'line-through' : '' }`,}  }>{todo.task}</button>
            </div>
        </div>
    )
}

export default Todo
