import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center bg-gray-800 text-white py-4 px-6 mb-4 rounded-lg cursor-pointer w-full md:w-3/4 lg:w-1/2 mx-auto'>
      <p
        onClick={() => toggleComplete(task.id)}
        className={`text-lg md:text-xl lg:text-2xl ${task.completed ? 'line-through text-gray-500' : ''}`}
      >
        {task.task}
      </p>
      <div className='flex mt-4 md:mt-0'>
        <PencilIcon
          className='h-6 w-6 text-gray-300 mr-4 cursor-pointer'
          onClick={() => editTodo(task.id)}
        />
        <TrashIcon
          className='h-6 w-6 text-gray-300 cursor-pointer'
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
