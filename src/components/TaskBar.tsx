import styles from "../styles/taskbar.module.css";
import plusLogo from "../assets/plus.svg";

export function TaskBar() {
  return (
    <div className={styles.taskBar}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
      </form>
      <button className={styles.button}>
        <p>Criar</p>
        <img src={plusLogo} alt="" />
      </button>
    </div>
  );
}
