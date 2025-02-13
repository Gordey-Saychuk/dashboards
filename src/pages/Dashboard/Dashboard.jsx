import Module from "../../components/Modules/Engine/Engine";
import Header from "../../components/Header/Header";
import styles from "./Dashboard.module.css";
import CarInfo from "../../components/CarInfo/CarInfo";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

import { useEffect, useState } from "react";
import FullScreenTable from "../../components/FullScreenTable/FullScreenTable";

function Dashboard() {
  const [isTableVisible, setIsTableVisible] = useState(false);

  useEffect(() => {
    if (isTableVisible) {
      document.body.style.overflow = "hidden"; // Блокируем прокрутку
    } else {
      document.body.style.overflow = ""; // Восстанавливаем
    }
  }, [isTableVisible]);

  const rowData = Array.from({ length: 50 }, (_, i) => ({
    client: `Client ${i + 1}`,
    orderDate: `2025-01-${String((i % 30) + 1).padStart(2, '0')}`,
    sds: `SDS ${i + 1}`,
    amount: `$${(Math.random() * 1000).toFixed(2)}`,
    status: i % 2 === 0 ? 'Completed' : 'Pending',
    delivery: `2025-02-${String((i % 28) + 1).padStart(2, '0')}`,
    country: ['USA', 'Germany', 'France', 'UK', 'Canada'][i % 5],
    category: ['Electronics', 'Clothing', 'Food', 'Toys', 'Books'][i % 5],
    rating: (Math.random() * 5).toFixed(1),
    notes: `Note ${i + 1}`
  }));

  const columnDefs = [
    { Header: 'Client', accessor: 'client' },
    { Header: 'Order Date', accessor: 'orderDate' },
    { Header: 'SDS', accessor: 'sds' },
    { Header: 'Amount', accessor: 'amount' },
    { Header: 'Status', accessor: 'status' },
    { Header: 'Delivery Date', accessor: 'delivery' },
    { Header: 'Country', accessor: 'country' },
    { Header: 'Category', accessor: 'category' },
    { Header: 'Rating', accessor: 'rating' },
    { Header: 'Notes', accessor: 'notes' }
  ];
  const toggleTable = () => setIsTableVisible(!isTableVisible);
  return (
    <div className={styles.dashboards}>

<Header isTableVisible={isTableVisible} toggleTable={toggleTable} />

    {isTableVisible && ( 
        <FullScreenTable
          rowData={rowData}
          columnDefs={columnDefs}
          onClose={toggleTable}
        />
      )}


    <div className={styles.dashboard}>

    <div className={styles.doubleSmall} >
    <Module className="small" /> 
    <Module className="small" />
    </div>
   
      
<Module className="large" />

<Module className="medium" />
        <CarInfo className="long" ></CarInfo>

{/* <Module className="long" /> */}
 
<ImageGallery className="long" />
 
<Module className="seven" />  

<Module className="sevens" />     
 
<Module className="mediums" />  

    </div>
    </div>
  );
}

export default Dashboard;
