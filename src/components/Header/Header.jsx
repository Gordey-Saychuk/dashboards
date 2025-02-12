import styles from "./Header.module.css";
import dotsNineIcon from '../../assets/dots_nine_icon.svg';
// import FullScreenTable from '../FullScreenTable/FullScreenTable';
import { useState, useEffect } from "react";
   
function Header() { 
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
    <header className={styles.header}> 
      <div className={styles.left}>
        <div onClick={toggleTable} className={styles.menuIcon}>
          <img src={dotsNineIcon} alt="Menu Icon" /> 
        
        </div>
        {isTableVisible && (
          <FullScreenTable 
            rowData={rowData}
            columnDefs={columnDefs}
            onClose={toggleTable} // Закрытие таблицы
          />
        )} 

        <div className={styles.tickerse}>  
        <div className={styles.ticker}>
      
          <span>BTC</span> <strong>$26,240.00</strong>
        </div>
        <div className={styles.ticker}>
          <span>BTC.D</span> <strong>47.7%</strong>
        </div>
        <div className={styles.ticker}>
          <span>S&P 500</span> <strong>4,109.31</strong>
        </div>
        <div className={styles.ticker}>
          <span>UNINDEX</span> <strong>1079.28</strong>
        </div>
      </div>
      </div>

      <div className={styles.center}>
        <div className={styles.ticker}>
          <span>Balance</span> <strong>1.55223 BTC</strong>
        </div>
        <div className={styles.ticker}>
          <span>1D Change</span> <strong>+2.56%</strong>
        </div>
        <div className={styles.ticker}>
          <span>7D Change</span> <strong>-16.74%</strong>
        </div>
      </div>

      <div className={styles.right}>
      <div className={styles.avatar}></div>
      <div className={styles.rightInfo}> 
        <span className={styles.username}>Quan</span>
        <span className={styles.time}>14:15</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
