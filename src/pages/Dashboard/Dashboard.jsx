import Module from "../../components/Modules/Engine/Engine";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
<Module className="large" />
<Module className="small" />
<Module className="medium" />
<Module className="large" />

    </div>
  );
}

export default Dashboard;
