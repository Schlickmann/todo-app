import {
  BsCircle,
  BsFillCheckCircleFill,
  BsFillTrash3Fill,
} from "react-icons/bs";

import styles from "./TodoList.module.css";

interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onRemove: (id: string) => void;
  onToggle: (id: string) => void;
}

export function TodoList({ todos, onRemove, onToggle }: TodoListProps) {
  return (
    <ul className={styles.todoListContainer}>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.todoListItem}>
          <button
            type="button"
            className={styles.checkItemButton}
            onClick={() => onToggle(todo.id)}
          >
            {todo.isCompleted ? (
              <BsFillCheckCircleFill color="#8284FA" size="18px" />
            ) : (
              <BsCircle color="#4EA8DE" size="18px" />
            )}
          </button>
          <span aria-checked={todo.isCompleted}>{todo.title}</span>
          <button type="button" onClick={() => onRemove(todo.id)}>
            <BsFillTrash3Fill color="#808080" size="16px" />
          </button>
        </li>
      ))}
    </ul>
  );
}
