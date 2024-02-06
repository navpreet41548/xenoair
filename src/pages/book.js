import React, { useState } from "react";
import styles from "@/styles/Book.module.css";
import { ToastContainer, toast } from "react-toastify";
import Head from "next/head";
import { useRouter } from "next/router";

const Book = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isRoundAbout, setIsRoundAbout] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    departureCity: "",
    arrivalCity: "",
    returnDate: "",
    departureDate: "",
    numberOfPassengers: "",
    customMessage: "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = async () => {
    const checkbox = document.getElementsByClassName(styles.checkbox1)[0];
    checkbox.classList.toggle(styles.checkboxActive);
    setShowMessage(!showMessage);
  };
  const handleCheckbox2 = async () => {
    const checkbox = document.getElementsByClassName(styles.checkbox2)[0];
    checkbox.classList.toggle(styles.checkboxActive);
    setIsRoundAbout(!isRoundAbout);
  };
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = async () => {
    setLoading(true);
    console.log(formData);
    if (
      formData.firstName == "" ||
      formData.lastName == "" ||
      formData.arrivalCity == "" ||
      formData.departureCity == "" ||
      formData.departureDate == "" ||
      formData.numberOfPassengers == "" ||
      formData.email == ""
    ) {
      toast.warn("Every Field is Important", {
        position: "top-right",
        autoClose: 5000,
      });
      setLoading(false);
      return;
    }
    if (formData.number < 10) {
      toast.warn("Invalid Phone", {
        position: "top-right",
        autoClose: 5000,
      });
      setLoading(false);
      return;
    }
    if (isRoundAbout && formData.returnDate == "") {
      toast.warn("Every Field is Important", {
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
    const res = await fetch(`/api/book`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const dbData = await res.json();

    if (!dbData.err) {
      // toast.success("Message Sent!!", {
      //   position: "top-center",
      //   autoClose: 5000,
      // });
      toast.update(id, {
        render: "Message Sent!!",
        type: "success",
        isLoading: false,
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setLoading(false);
      router.push("/");
    } else {
      // toast.error("Something Went Wrong", {
      //   position: "top-center",
      //   autoClose: 5000,
      // });
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

    setLoading(false);
    console.log(formData);
  };
  return (
    <>
      <Head>
        <title>BOOK</title>
        <meta name="description" content="You can attach a custom message" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.form}>
          <h2 className={styles.formHeading}>Fill Out the Form</h2>

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
            className={styles.input}
            placeholder="Email"
            name="email"
          />
          <input
            onChange={(e) => handleInput(e)}
            className={styles.input}
            placeholder="Phone"
            name="phone"
          />
          <input
            onChange={(e) => handleInput(e)}
            className={styles.input}
            placeholder="Departure City"
            name="departureCity"
          />
          <input
            onChange={(e) => handleInput(e)}
            className={styles.input}
            placeholder="Arrival City"
            name="arrivalCity"
          />
          <h3 className={styles.label}>Departure Date</h3>
          <input
            onChange={(e) => handleInput(e)}
            className={styles.input}
            placeholder="Departure Date"
            type="date"
            name="departureDate"
          />
          {isRoundAbout && (
            <>
              <h3 className={styles.label}>Return Date</h3>
              <input
                onChange={(e) => handleInput(e)}
                className={styles.input}
                placeholder="Return Date"
                type="date"
                name="returnDate"
              />
            </>
          )}
          <div className={styles.checkboxWrapper}>
            <div
              className={`${styles.checkbox} ${styles.checkbox2}`}
              onClick={handleCheckbox2}
            >
              <i class="bx bx-check"></i>
            </div>
            <h4 className={styles.checkboxText}>Round About Trip</h4>
          </div>

          <input
            onChange={(e) => handleInput(e)}
            className={styles.input}
            name="numberOfPassengers"
            type="number"
            placeholder="Number of Passengers"
          />
          {showMessage && (
            <textarea
              onChange={(e) => handleInput(e)}
              name="customMessage"
              className={styles.textarea}
              placeholder="Custom Message"
            ></textarea>
          )}
          <div className={styles.checkboxWrapper}>
            <div
              className={`${styles.checkbox1} ${styles.checkbox}`}
              onClick={handleCheckbox}
            >
              <i class="bx bx-check"></i>
            </div>
            <h4 className={styles.checkboxText}>Attach a custom message</h4>
          </div>
          {loading ? (
            <button className={styles.button}>
              <i class="bx bx-loader-alt bx-spin"></i>
            </button>
          ) : (
            <button onClick={handleSubmit} className={styles.button}>
              Contact
            </button>
          )}
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default Book;
