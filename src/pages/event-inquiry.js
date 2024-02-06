import React, { useState } from "react";
import styles from "@/styles/Book.module.css";
import { toast } from "react-toastify";
import Head from "next/head";
import { useRouter } from "next/router";

const EventInquiry = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    event: "",
    message: "",
  });

  const handleInput = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    console.log(contactData);

    if (
      contactData.firstName === "" ||
      contactData.lastName === "" ||
      contactData.email === ""
    ) {
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

    // Example API call
    try {
      const res = await fetch(`/api/event`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const dbData = await res.json();

      if (!dbData.err) {
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
      console.log(error);
      console.error("API Error:", error);
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
    <>
      <Head>
        <title>EVENT INQUIRY</title>
        <meta
          name="description"
          content="Whether it's a wedding, corporate event, or birthday celebration, we're here to make it unforgettable. Click the 'Contact Us' button below to get in touch. Let's turn your vision into a remarkable event together."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.form}>
          <h2 className={styles.formHeading}>Fill Out the Form</h2>
          <p className={styles.formPara}>
            Let us know about your special event
          </p>

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
            placeholder="Event"
            name="event"
          />

          <textarea
            onChange={(e) => handleInput(e)}
            name="message"
            className={`${styles.textarea} ${styles.message}`}
            placeholder="Message"
          ></textarea>

          {loading ? (
            <button className={styles.button}>
              <i className="bx bx-loader-alt bx-spin"></i>
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

export default EventInquiry;
