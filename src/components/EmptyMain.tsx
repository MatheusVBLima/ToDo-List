import emptyLogo from "../assets/Clipboard.svg";
import styles from "../styles/emptyMain.module.css";

export function EmptyMain() {
  return (
    <div className={styles.container}>
      <img src={emptyLogo} alt="" />
      <div className={styles.textos}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
