import React, { useState } from "react";
import styles from "@/styles/Book.module.css";

const MembershipInquiry = () => {
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
        <select className={styles.input}>
          <option>Phone Call</option>
          <option>Email</option>
          <option>Text</option>
        </select>
        <h3 className={styles.label}>Date of Birth</h3>
        <input
          className={styles.input}
          placeholder="Date Of birth"
          type="Date"
        />
        <input className={styles.input} placeholder="Address" />
        <input className={styles.input} placeholder="Weight" />
        <h3 className={styles.label}>Sex</h3>
        <div className={styles.checkboxWrapperContainer}>
          <div
            className={`${styles.checkboxWrapper} ${styles.checkboxWrapperSmall}`}
          >
            <div className={styles.checkbox} onClick={handleCheckbox}>
              <i class="bx bx-check"></i>
            </div>
            <h4 className={styles.checkboxText}>Male</h4>
          </div>
          <div
            className={`${styles.checkboxWrapper} ${styles.checkboxWrapperSmall}`}
          >
            <div className={styles.checkbox} onClick={handleCheckbox}>
              <i class="bx bx-check"></i>
            </div>
            <h4 className={styles.checkboxText}>Female</h4>
          </div>
        </div>
        <h3 className={styles.label}>
          Which Membership Tier Are You Interested In?
        </h3>
        <div className={styles.checkboxWrapperContainer}>
          <div
            className={`${styles.checkboxWrapper} ${styles.checkboxWrapperSmall}`}
          >
            <div className={styles.checkbox} onClick={handleCheckbox}>
              <i class="bx bx-check"></i>
            </div>
            <h4 className={styles.checkboxText}>GOLD</h4>
          </div>
          <div
            className={`${styles.checkboxWrapper} ${styles.checkboxWrapperSmall}`}
          >
            <div className={styles.checkbox} onClick={handleCheckbox}>
              <i class="bx bx-check"></i>
            </div>
            <h4 className={styles.checkboxText}>PLATINUM</h4>
          </div>
          <div
            className={`${styles.checkboxWrapper} ${styles.checkboxWrapperSmall}`}
          >
            <div className={styles.checkbox} onClick={handleCheckbox}>
              <i class="bx bx-check"></i>
            </div>
            <h4 className={styles.checkboxText}>DIAMOND</h4>
          </div>
        </div>

        <textarea
          className={styles.textarea}
          placeholder="Departing Areas of Interest"
        ></textarea>
        <textarea
          className={styles.textarea}
          placeholder="Arrival Areas of Interest"
        ></textarea>

        <button className={styles.button}>Submit</button>
      </div>
    </div>
  );
};

export default MembershipInquiry;
