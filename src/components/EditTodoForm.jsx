import React, { useState } from 'react';

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== '') {
      editTodo(value, task.id);
    }
    setValue('');
  };

  return (
    <form className='flex flex-col md:flex-row items-center w-full md:w-3/4 lg:w-1/2 mx-auto bg-gray-800 p-4 rounded-lg' onSubmit={handleSubmit}>
      <input
        onChange={(event) => setValue(event.target.value)}
        value={value}
        className='todo-input w-full md:w-3/4 p-2 rounded-md text-black mb-2 md:mb-0 md:mr-4'
        placeholder='Update Task'
        type='text'
      />
      <button
        type='submit'
        className='todo-btn bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200'
      >
        Update
      </button>
    </form>
  );
};

export default EditTodoForm;
