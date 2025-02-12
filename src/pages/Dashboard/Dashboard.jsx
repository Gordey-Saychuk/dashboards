import Module from "../../components/Modules/Engine/Engine";
import Header from "../../components/Header/Header";
import styles from "./Dashboard.module.css";
import CarInfo from "../../components/CarInfo/CarInfo";

function Dashboard() {
  return (
    <div className={styles.dashboards}>

    <Header />
    <div className={styles.dashboard}>

    <div className={styles.doubleSmall} >
    <Module className="small" /> 
    <Module className="small" />
    </div>
   
      
<Module className="large" />

<Module className="medium" /> 

<Module className="long" />
 
<CarInfo className="long" ></CarInfo>
 
{/* <Module className="long" /> */}
 
<Module className="seven" />  

<Module className="sevens" />     
 
<Module className="mediums" />  

    </div>
    </div>
  );
}

export default Dashboard;
