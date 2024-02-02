import React, { useState } from "react";
import styles from "@/styles/Book.module.css";
import { toast } from "react-toastify";

const MembershipInquiry = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    contactMethod: "Phone Call",
    dateOfBirth: "",
    address: "",
    weight: "",
    sex: "",
    membershipTier: "",
    departingAreasOfInterest: "",
    arrivalAreasOfInterest: "",
  });

  const handleCheckbox1 = (index, data) => {
    const checkbox = document.getElementsByClassName(styles.checkbox1);
    for (let i = 0; i < checkbox.length; i++) {
      const element = checkbox[i];
      element.classList.remove(styles.checkboxActive);
    }
    checkbox[index].classList.toggle(styles.checkboxActive);
    setInquiryData({ ...inquiryData, sex: data });
  };
  const handleCheckbox2 = (index, data) => {
    const checkbox2 = document.getElementsByClassName(styles.checkbox2);
    for (let i = 0; i < checkbox2.length; i++) {
      const element = checkbox2[i];
      element.classList.remove(styles.checkboxActive);
    }
    checkbox2[index].classList.toggle(styles.checkboxActive);
    setInquiryData({ ...inquiryData, membershipTier: data });
  };

  const handleInput = (e) => {
    setInquiryData({ ...inquiryData, [e.target.name]: e.target.value });
  };

  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = async () => {
    setLoading(true);

    if (
      inquiryData.firstName === "" ||
      inquiryData.lastName === "" ||
      inquiryData.email === "" ||
      inquiryData.phone === "" ||
      inquiryData.dateOfBirth === "" ||
      inquiryData.address === "" ||
      inquiryData.weight === "" ||
      inquiryData.sex === "" ||
      inquiryData.membershipTier === "" ||
      inquiryData.departingAreasOfInterest === "" ||
      inquiryData.arrivalAreasOfInterest === ""
    ) {
      toast.warn("Every Field is Important", {
        position: "top-right",
        autoClose: 5000,
      });
      setLoading(false);
      return;
    }

    if (inquiryData.phone.length < 10) {
      toast.warn("Invalid Phone", {
        position: "top-right",
        autoClose: 5000,
      });
      setLoading(false);
      return;
    }

    if (!re.test(inquiryData.email)) {
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
      const res = await fetch(`/api/inquiry`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inquiryData),
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
    <div className={styles.container}>
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
        <input
          onChange={(e) => handleInput(e)}
          name="phone"
          className={styles.input}
          placeholder="Phone"
        />
        <h3 className={styles.label}>Preferred Method for Contact</h3>
        <select
          onChange={(e) => handleInput(e)}
          name="contactMethod"
          className={styles.input}
        >
          <option value={"Phone Call"}>Phone Call</option>
          <option value={"Email"}>Email</option>
          <option value={"Text"}>Text</option>
        </select>
        <h3 className={styles.label}>Date of Birth</h3>
        <input
          onChange={(e) => handleInput(e)}
          name="dateOfBirth"
          className={styles.input}
          placeholder="Date Of birth"
          type="Date"
        />
        <input
          onChange={(e) => handleInput(e)}
          name="address"
          className={styles.input}
          placeholder="Address"
        />
        <input
          onChange={(e) => handleInput(e)}
          name="weight"
          className={styles.input}
          placeholder="Weight"
        />
        <h3 className={styles.label}>Sex</h3>
        <div className={styles.checkboxWrapperContainer}>
          <div
            className={`${styles.checkboxWrapper} ${styles.checkboxWrapperSmall}`}
          >
            <div
              className={`${styles.checkbox} ${styles.checkbox1}`}
              onClick={() => handleCheckbox1(0, "Male")}
            >
              <i class="bx bx-check"></i>
            </div>
            <h4 className={styles.checkboxText}>Male</h4>
          </div>
          <div
            className={`${styles.checkboxWrapper} ${styles.checkboxWrapperSmall}`}
          >
            <div
              className={`${styles.checkbox} ${styles.checkbox1}`}
              onClick={() => handleCheckbox1(1, "Female")}
            >
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
            <div
              className={`${styles.checkbox} ${styles.checkbox2}`}
              onClick={() => handleCheckbox2(0, "GOLD")}
            >
              <i class="bx bx-check"></i>
            </div>
            <h4 className={styles.checkboxText}>GOLD</h4>
          </div>
          <div
            className={`${styles.checkboxWrapper} ${styles.checkboxWrapperSmall}`}
          >
            <div
              className={`${styles.checkbox} ${styles.checkbox2}`}
              onClick={() => handleCheckbox2(1, "PLATINUM")}
            >
              <i class="bx bx-check"></i>
            </div>
            <h4 className={styles.checkboxText}>PLATINUM</h4>
          </div>
          <div
            className={`${styles.checkboxWrapper} ${styles.checkboxWrapperSmall}`}
          >
            <div
              className={`${styles.checkbox} ${styles.checkbox2}`}
              onClick={() => handleCheckbox2(2, "DIAMOND")}
            >
              <i class="bx bx-check"></i>
            </div>
            <h4 className={styles.checkboxText}>DIAMOND</h4>
          </div>
        </div>

        <textarea
          onChange={(e) => handleInput(e)}
          name="departingAreasOfInterest"
          className={styles.textarea}
          placeholder="Departing Areas of Interest"
        ></textarea>
        <textarea
          onChange={(e) => handleInput(e)}
          name="arrivalAreasOfInterest"
          className={styles.textarea}
          placeholder="Arrival Areas of Interest"
        ></textarea>
        {loading ? (
          <button className={styles.button}>
            <i class="bx bx-loader-alt bx-spin"></i>
          </button>
        ) : (
          <button onClick={handleSubmit} className={styles.button}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MembershipInquiry;
