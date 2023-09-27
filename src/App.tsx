import { ComponentProps, useState } from "react";
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

  return (
    <>
      <Header />
      <Form onSubmit={addTask} />
      <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <h3>
            Todos created <span>0</span>
          </h3>
          <h3>
            Todos completed <span>0</span>
          </h3>
        </div>
        {!todos.length ? <EmptyState /> : <TodoList todos={todos} />}
      </div>
    </>
  );
}

export default App;
