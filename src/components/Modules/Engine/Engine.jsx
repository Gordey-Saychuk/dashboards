import styles from "./Engine.module.css";

function Module({ className }) {
  return <div className={`${styles.module} ${styles[className]}`}></div>;
}


export default Module;
