import logo from "../assets/rocket.svg";
import styles from "../styles/header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="" />
      <div className={styles.name}>
        <span>to</span>
        <p>do</p>
      </div>
    </div>
  );
}
