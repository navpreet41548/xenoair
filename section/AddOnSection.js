import React from "react";
import styles from "@/styles/AddOnSection.module.css";
import Image from "next/image";

const AddOnSection = () => {
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
            src={"/images/addOns/addOn1.png"}
            width={1000}
            height={1000}
            alt="Service Image"
          />
          <div className={styles.cardContent}>
            <h2 className={styles.cardHeading}>Chauffeur</h2>
            <p className={styles.cardPara}>
              Eliminate the stress of ground transportation with our high-end
              car service to and from the airstrip.
            </p>
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
            <li className={styles.cardList}>
              <span className={styles.arrowIcon}>
                <i class="bx bx-left-arrow-alt"></i>
              </span>
              01 Chauffeur
            </li>
            <li className={styles.cardList}>
              <span className={styles.arrowIcon}>
                <i class="bx bx-left-arrow-alt"></i>
              </span>
              02 Staging
            </li>
            <li className={styles.cardList}>
              <span className={styles.arrowIcon}>
                <i class="bx bx-left-arrow-alt"></i>
              </span>
              03 Security
            </li>
            <li className={styles.cardList}>
              <span className={styles.arrowIcon}>
                <i class="bx bx-left-arrow-alt"></i>
              </span>
              04 Professional Photography
            </li>
            <li className={styles.cardList}>
              <span className={styles.arrowIcon}>
                <i class="bx bx-left-arrow-alt"></i>
              </span>
              05 Exotic Car Rentals
            </li>
            <li className={styles.cardList}>
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
