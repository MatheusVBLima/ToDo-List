import "./styles/global.css";
import styles from "./styles/App.module.css";
import { Header } from "./components/Header";
import { TaskBar } from "./components/TaskBar";
import { Main } from "./components/Main";

export function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <TaskBar />
        <Main />
      </div>
    </>
  );
}
