import React, { useState } from "react";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import styles from "./AuthForms.module.css";
import tg from "../../assets/icons/telegram_icon.svg";

const AuthForm = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwords, setPasswords] = useState("");

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
         <InputField
        type="password"
        placeholder="Confirm password"
        value={passwords}
        onChange={(e) => setPasswords(e.target.value)}
      />


      <Button text="Sing Up" type="submit" />
      
     
      {/* Ссылка на регистрацию */}
      <p className={styles.registerText}>
        Have an account? <a href="/auth" className={styles.registerLink}>Sign in</a>
      </p>
    </form>
  );
};

export default AuthForm;
 