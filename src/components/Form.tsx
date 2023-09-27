import { FormEvent, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import styles from "./Form.module.css";

interface FormProps {
  onSubmit: (task: string) => void;
}

export function Form({ onSubmit }: FormProps) {
  const [task, setTask] = useState("");

  const handleFormSubmission = (e: FormEvent) => {
    e.preventDefault();

    // Send new todo to parent component
    onSubmit(task);
    setTask("");
  };
  return (
    <form className={styles.container} onSubmit={handleFormSubmission}>
      <input
        type="text"
        placeholder="Add Todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit" disabled={!task}>
        Add <BsPlusCircle />
      </button>
    </form>
  );
}
