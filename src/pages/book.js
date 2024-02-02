import React, { useState } from "react";
import styles from "@/styles/Book.module.css";

const Book = () => {
  const [showMessage, setShowMessage] = useState(false);
  const handleCheckbox = () => {
    const checkbox = document.getElementsByClassName(styles.checkbox)[0];
    checkbox.classList.toggle(styles.checkboxActive);
    setShowMessage(!showMessage);
  };
  return (
    <div className={styles.container}>
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
        <input className={styles.input} placeholder="Phone" />
        <input className={styles.input} placeholder="Departure City" />
        <input className={styles.input} placeholder="Arrival City" />
        <input
          className={styles.input}
          placeholder="Departure Date"
          type="date"
        />

        <input className={styles.input} placeholder="Number of Passengers" />
        {showMessage && (
          <textarea
            className={styles.textarea}
            placeholder="Custom Message"
          ></textarea>
        )}
        <div className={styles.checkboxWrapper}>
          <div className={styles.checkbox} onClick={handleCheckbox}>
            <i class="bx bx-check"></i>
          </div>
          <h4 className={styles.checkboxText}>Attach a custom message</h4>
        </div>
        <button className={styles.button}>Contact</button>
      </div>
    </div>
  );
};

export default Book;
