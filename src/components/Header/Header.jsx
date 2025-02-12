import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.menuIcon}>☰</div>
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
        <span className={styles.username}>Quan</span>
        <span className={styles.time}>14:15</span>
        <div className={styles.avatar}></div>
      </div>
    </header>
  );
}

export default Header;
