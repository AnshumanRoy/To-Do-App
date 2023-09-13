import React from 'react';
import Todo from './Todo';

const TodoList = ({ tasks, handleDelete }) => {

    const arr = tasks.map((item) => (
        <div key={item.id} className='row'>
            <Todo task={item.task} completed={item.completed} />
            <div className='col-md-auto'>
                <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
        </div>
    ));

    return (
        <div className='row'>
            {arr}
        </div>
    );
};

export default TodoList;