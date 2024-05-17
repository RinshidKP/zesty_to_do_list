import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      setError("Task cannot be empty.");
    } else if (value.length > 50) {
      setError("Task cannot exceed 50 characters.");
    } else {
      addTodo(value);
      setValue("");
      setError("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value.length > 50) {
      setError("Task cannot exceed 50 characters.");
    } else {
      setError("");
    }
  };

  return (
    <form className='flex flex-col md:flex-row items-center w-full md:w-3/4 lg:w-1/2 mx-auto bg-gray-800 p-4 rounded-lg mb-4' onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={value}
        className={`todo-input w-full md:flex-1 p-2 rounded-md text-black mb-2 md:mb-0 md:mr-4 ${error ? 'border-red-500' : ''}`}
        placeholder='What is the task today?'
        type='text'
      />
      <button
        type='submit'
        className='todo-btn bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200'
      >
        Add Task
      </button>
      {error && <p className='mx-5 text-red-400 mt-2'>{error}</p>}
    </form>
  );
};

export default TodoForm;
