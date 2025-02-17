// AuthPage.jsx
import React from 'react';
import styles from './RegisterPage.module.css';
import AuthForms from '../../components/AuthForms/AuthForms';

const AuthPage = () => {  
  return (
    <div className={styles.authPage}>
      <div className={styles.authContainer}>
        <h1 className={styles.title}>Welcome User!</h1>
        <AuthForms />
      </div>
    </div>
  );
};

export default AuthPage;
