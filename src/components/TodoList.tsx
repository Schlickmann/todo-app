import styles from "./TodoList.module.css";

interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <ul className={styles.todoListContainer}>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
