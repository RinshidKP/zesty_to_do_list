import React , {useState , useEffect}  from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm'; // Corrected import
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const TodoWrapper = () => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];

    const [todos,setTodos] = useState(storedTodos)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        let val = todos.some((value)=>value.task===todo)
        if(val){
            toast.error("The Todo Already exists")
        } else {
            setTodos([...todos, {
                id: crypto.randomUUID() ,
                task: todo ,
                completed: false ,
                isEditing: false
            }])
            toast.success("The Todo Has Been Added")
        }
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,completed: !todo.completed} : todo))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
        toast.error("The Todo Has Been Deleted")
    }

    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,task,isEditing : task.isEditing} : todo))
        toast.success("The Todo Has Been Updated")
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen '>
            <ToastContainer />
            <TodoForm addTodo={addTodo} className="mb-4" />
            {todos.map(todo => todo.isEditing ? (
                <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
            ) : (
                <Todo key={todo.id} task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
            ))}
        </div>
    );
}

export default TodoWrapper;
