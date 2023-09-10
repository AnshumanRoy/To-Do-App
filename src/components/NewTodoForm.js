import React, { useState } from 'react';

const NewTodoForm = ({ handleAddTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTask(newTask)
        setNewTask('')
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    style={{ width: 'flex' }}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default NewTodoForm;
