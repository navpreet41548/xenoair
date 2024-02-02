import React, { useState } from "react";
import styles from "@/styles/Book.module.css";

const WeeklyDeals = () => {
  const [showMessage, setShowMessage] = useState(false);
  const handleCheckbox = () => {
    const checkbox = document.getElementsByClassName(styles.checkbox)[0];
    checkbox.classList.toggle(styles.checkboxActive);
    setShowMessage(!showMessage);
  };
  return (
    <div className={`${styles.container} ${styles.smallFormContainer}`}>
      <div className={styles.form}>
        <h2 className={styles.formHeading}>Fill Out the Form</h2>
        <p className={styles.formPara}>Lorem ipsum some other heading</p>

        <div className={styles.inputWrapper}>
          <input
            name="firstName"
            className={styles.input}
            placeholder="First Name"
          />
          <input
            name="lastName"
            className={styles.input}
            placeholder="Last Name"
          />
        </div>

        <input className={styles.input} placeholder="Email" />

        <button className={styles.button}>Subscribe</button>
      </div>
    </div>
  );
};

export default WeeklyDeals;
