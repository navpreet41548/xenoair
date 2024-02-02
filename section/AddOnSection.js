import React, { useState } from "react";
import styles from "@/styles/AddOnSection.module.css";
import Image from "next/image";

const AddOnSection = () => {
  const [selectedService, setSelectedService] = useState({
    heading: "Chauffeur",
    para: "Eliminate the stress of ground transportation with our high-end car service to and from the airstrip.",
    image: "addOn1.png",
  });
  const data = [
    {
      heading: "Chauffeur",
      para: "Eliminate the stress of ground transportation with our high-end car service to and from the airstrip.",
      image: "addOn1.png",
    },
    {
      heading: "Staging",
      para: "Transform the private jet cabin into a customized space, whether for a business meeting, a romantic getaway, or any special occasion, making each flight a memorable experience.",
      image: "addOn2.png",
    },
    {
      heading: "Security",
      para: "For clients who require an added layer of security, we offer discreet and highly-trained personnel to ensure a safe journey.",
      image: "addOn3.png",
    },
    {
      heading: "Professional Photograpy",
      para: "Capture the magic of your journey with our in-house photographers. From take-off to landing, we document your experience in a style that aligns with your personal or corporate brand.",
      image: "addOn4.png",
    },
    {
      heading: "Exotic Car Rentals",
      para: "Once you land, continue your journey in style. Choose from our range of luxury vehicles for an extraordinary driving experience.",
      image: "addOn5.png",
    },
    {
      heading: "In-flight Catering",
      para: "Savor the luxury of choice with XenoAir's 24/7 bespoke in-flight catering. Craft your menu, from comfort classics to gourmet delights, with options for every dietary need, including Halal.",
      image: "addOn6.png",
    },
  ];

  const handleServiceClick = (index) => {
    setSelectedService(data[index]);
    const cardList = document.getElementsByClassName(styles.cardList);
    for (let i = 0; i < cardList.length; i++) {
      const element = cardList[i];
      element.classList.remove(styles.cardListActive);
    }
    cardList[index].classList.add(styles.cardListActive);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Add-On Services</h2>
      <p className={styles.para}>
        In addition to flight itineraries, we offer a comprehensive suite of
        add-on services designed to provide a seamless, full-circle luxury
        experience.
      </p>

      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.cardAddOn}`}>
          <Image
            className={styles.addOnImage}
            src={`/images/addOns/${selectedService.image}`}
            width={1000}
            height={1000}
            alt="Service Image"
          />
          <div className={styles.cardContent}>
            <h2 className={styles.cardHeading}>{selectedService.heading}</h2>
            <p className={styles.cardPara}>{selectedService.para}</p>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.addOnImage}
            src={"/images/addOns/background.png"}
            width={1000}
            height={1000}
            alt="Service Image"
          />
          <ul className={styles.cardUl}>
            <li
              className={`${styles.cardList} ${styles.cardListActive}`}
              onClick={() => handleServiceClick(0)}
            >
              <span className={styles.arrowIcon}>
                <i class="bx bx-left-arrow-alt"></i>
              </span>
              01 Chauffeur
            </li>
            <li
              className={styles.cardList}
              onClick={() => handleServiceClick(1)}
            >
              <span className={styles.arrowIcon}>
                <i class="bx bx-left-arrow-alt"></i>
              </span>
              02 Staging
            </li>
            <li
              className={styles.cardList}
              onClick={() => handleServiceClick(2)}
            >
              <span className={styles.arrowIcon}>
                <i class="bx bx-left-arrow-alt"></i>
              </span>
              03 Security
            </li>
            <li
              className={styles.cardList}
              onClick={() => handleServiceClick(3)}
            >
              <span className={styles.arrowIcon}>
                <i class="bx bx-left-arrow-alt"></i>
              </span>
              04 Professional Photography
            </li>
            <li
              className={styles.cardList}
              onClick={() => handleServiceClick(4)}
            >
              <span className={styles.arrowIcon}>
                <i class="bx bx-left-arrow-alt"></i>
              </span>
              05 Exotic Car Rentals
            </li>
            <li
              className={styles.cardList}
              onClick={() => handleServiceClick(5)}
            >
              <span className={styles.arrowIcon}>
                <i class="bx bx-left-arrow-alt"></i>
              </span>
              06 In-flight Catering
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddOnSection;
