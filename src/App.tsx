import { ComponentProps, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { EmptyState } from "./components/EmptyState";
import { TodoList } from "./components/TodoList";

import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState<ComponentProps<typeof TodoList>["todos"]>(
    []
  );

  const completedTodos = useMemo(() => {
    return todos.filter((todo) => todo.isCompleted).length;
  }, [todos]);
  const totalTodos = useMemo(() => {
    return todos.length;
  }, [todos]);

  const addTask = (task: string) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title: task,
        isCompleted: false,
      },
    ]);
  };

  const removeTask = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTask = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <>
      <Header />
      <Form onSubmit={addTask} />
      <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <h3>
            Todos created <span>{totalTodos}</span>
          </h3>
          <h3>
            Todos completed{" "}
            <span>
              {totalTodos === 0
                ? completedTodos
                : `${completedTodos} of ${totalTodos}`}
            </span>
          </h3>
        </div>
        {!todos.length ? (
          <EmptyState />
        ) : (
          <TodoList todos={todos} onRemove={removeTask} onToggle={toggleTask} />
        )}
      </div>
    </>
  );
}

export default App;
