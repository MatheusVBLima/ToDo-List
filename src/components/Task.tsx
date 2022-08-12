import styles from "../styles/task.module.css";

export function Task() {
  return (
    /* TODO: faze gambiarra para o checkbox ficar redondo */

    <div className={styles.container}>
      <input type="checkbox" id="checkbox" />
      {/*    FIXME: arrumar a linha inicial do paragrafo abaixo para ficar igual ao input */}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
        placeat adipisicing elit. Similique placeat. asdasdasd
      </p>
    </div>
  );
}
