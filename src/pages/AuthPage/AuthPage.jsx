// AuthPage.jsx
import React from 'react';
import styles from './AuthPage.module.css';
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = () => {
  return (
    <div className={styles.authPage}>
      <div className={styles.authContainer}>
        <h1 className={styles.title}>Welcome Back!</h1>
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;
