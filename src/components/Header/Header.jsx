import styles from "./Header.module.css";
import dotsNineIcon from '../../assets/dots_nine_icon.svg';
import FullScreenTable from "../FullScreenTable/FullScreenTable";
import SearchInput from "../SearchInput/SearchInput";

function Header({ toggleTable, isTableVisible }) { 
 

  return (
    <header className={styles.header}> 
      <div className={styles.left}>
        <div onClick={toggleTable} className={styles.menuIcon}>
          <img src={dotsNineIcon} alt="Menu Icon" /> 
        </div>
      </div>

     
        <>
        {!isTableVisible && (

         <>
          
          <div className={styles.tickerse}>  
          <div className={styles.ticker}>
            <span>VIN</span> <strong>W093463</strong>
          </div>
          <div className={styles.ticker}>
            <span>BRAND</span> <strong>Volkswagen</strong>
          </div>
          <div className={styles.ticker}>
            <span>MODEL</span> <strong>Polo</strong>
          </div>
          <div className={styles.ticker}> 
            <span>YEAR</span> <strong>2014</strong>
          </div>
        </div>
      

          {/* <div className={styles.center}>
            <div className={styles.ticker}>
              <span>Balance</span> <strong>1.55223 BTC</strong>
            </div>
            <div className={styles.ticker}>
              <span>1D Change</span> <strong>+2.56%</strong>
            </div>
            <div className={styles.ticker}>
              <span>7D Change</span> <strong>-16.74%</strong>
            </div>
          </div>   */}
          </>
      )}
         <div className={styles.searchContainer}>
  <SearchInput />
</div>

          <div className={styles.right}>
             <a href="/auth" >
            <div className={styles.avatar}></div>
            </a>
            <div className={styles.rightInfo}> 
              <span className={styles.username}>Quan</span>
              <span className={styles.time}>14:15</span>
            </div>
            
          </div> 
        </>

      
 
    </header>
  );
}

export default Header;
