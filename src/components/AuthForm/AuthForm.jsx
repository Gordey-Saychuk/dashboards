import React, { useState } from "react";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import styles from "./AuthForm.module.css";
import tg from "../../assets/icons/telegram_icon.svg";

const AuthForm = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { email, password });
  };

  const handleTelegramLogin = () => {
    console.log("Redirect to Telegram login");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputField
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

<p className={styles.registerTexts}>
     <a href="/register" className={styles.registerLink}>Forgot password?</a>
      </p>
      <Button text="Login" type="submit" />
      
      {/* Кнопка Telegram */}
      <button className={styles.telegramButton} type="button" onClick={handleTelegramLogin}>
        <img src={tg} alt="Telegram" className={styles.telegramIcon} />
        Login with Telegram
      </button>

      {/* Ссылка на регистрацию */}
      <p className={styles.registerText}>
        Don't have an account? <a href="/register" className={styles.registerLink}>Sign up</a>
      </p>
    </form>
  );
};

export default AuthForm;
 