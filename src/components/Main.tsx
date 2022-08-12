import { useState } from "react";
import { EmptyMain } from "./EmptyMain";
import { Task } from "./Task";
import styles from "../styles/main.module.css";

export function Main() {
  const [isEmpty, setIsEmpty] = useState(true);

  function handleIsEmpty() {
    setIsEmpty((isEmpty) => !isEmpty);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.criadas}>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div className={styles.concluidas}>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </header>

      {/* <button onClick={handleIsEmpty}>Add</button> */}
      {isEmpty ? <EmptyMain /> : <Task />}
    </div>
  );
}
