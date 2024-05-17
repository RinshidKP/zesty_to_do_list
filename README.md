```markdown
# Todo List Application

This is a simple Todo List application built with React and styled using Tailwind CSS. The application allows users to add, edit, mark as complete, and delete tasks. It also includes persistent storage using the browser's local storage.

## Features

- Add new tasks
- Edit existing tasks
- Mark tasks as complete
- Delete tasks
- Persistent storage using local storage
- Responsive design using Tailwind CSS
- Notifications using `react-toastify`

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/todo-list.git
   cd todo-list
   ```

2. **Install the dependencies:**

   ```sh
   npm install
   ```

3. **Run the application:**

   ```sh
   npm run dev
   ```

   This will start the application using Vite.

## Usage

After starting the application, you can access it in your browser at `http://localhost:3000`.

## Components

### TodoWrapper

The main component that wraps the entire application. It handles state management and renders the list of todos.

### TodoForm

A form component for adding new tasks.

### EditTodoForm

A form component for editing existing tasks.

### Todo

A component that represents a single todo item. It includes buttons for editing and deleting the task, as well as toggling its completion status.

## Styling

The application uses Tailwind CSS for styling. Custom styles for complex backgrounds are defined in a separate CSS file.

### Custom CSS

The `app.css` file includes styles for a complex background gradient:

```css
/* app.css */
.background-gradient {
  background-image: radial-gradient(circle at 85% 1%, hsla(

```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to modify and extend this application as per your needs. Happy coding!
```
