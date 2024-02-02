import React, { useState } from "react";
import styles from "@/styles/Book.module.css";
import { toast } from "react-toastify";

const WeeklyDeals = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === ""
    ) {
      toast.warn("Every Field is Important", {
        position: "top-right",
        autoClose: 5000,
      });
      setLoading(false);
      return;
    }

    if (!re.test(formData.email)) {
      toast.warn("Invalid Email", {
        position: "top-right",
        autoClose: 5000,
      });
      setLoading(false);
      return;
    }

    const id = toast.loading("Please wait...", {
      position: "top-right",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    try {
      const res = await fetch(`/api/deals`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const dbData = await res.json();

      if (!dbData.err) {
        toast.update(id, {
          render: "Subscribed to Weekly Deals!",
          type: "success",
          isLoading: false,
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setLoading(false);
      } else {
        toast.update(id, {
          render: "Something Went Wrong",
          type: "error",
          isLoading: false,
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setLoading(false);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.update(id, {
        render: "API Error",
        type: "error",
        isLoading: false,
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setLoading(false);
    }
  };

  return (
    <div className={`${styles.container} ${styles.smallFormContainer}`}>
      <div className={styles.form}>
        <h2 className={styles.formHeading}>Fill Out the Form</h2>
        <p className={styles.formPara}>Lorem ipsum some other heading</p>

        <div className={styles.inputWrapper}>
          <input
            onChange={(e) => handleInput(e)}
            name="firstName"
            className={styles.input}
            placeholder="First Name"
          />
          <input
            onChange={(e) => handleInput(e)}
            name="lastName"
            className={styles.input}
            placeholder="Last Name"
          />
        </div>

        <input
          onChange={(e) => handleInput(e)}
          name="email"
          className={styles.input}
          placeholder="Email"
        />

        {loading ? (
          <button className={styles.button}>
            <i class="bx bx-loader-alt bx-spin"></i>
          </button>
        ) : (
          <button onClick={handleSubmit} className={styles.button}>
            Subscribe
          </button>
        )}
      </div>
    </div>
  );
};

export default WeeklyDeals;
