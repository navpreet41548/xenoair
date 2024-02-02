import React from "react";
import Image from "next/image";
import styles from "@/styles/HomeSection.module.css";
import Link from "next/link";
const HomeSection = () => {
  const handleArrowClick = () => {
    const rightContainer = document.getElementsByClassName(styles.right)[0];
    rightContainer.classList.toggle(styles.rightActive);
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.left}>
        <div className={styles.content}>
          <h3 className={styles.tagLine}>
            <span className={styles.diff}>XENO</span>AIR
          </h3>
          <h1 className={styles.mainHeading}>
            Anytime, Anywhere, We're Here for Your Travel Needs
          </h1>
          <p className={styles.para}>
            Anytime, anywhere, by land, by air, or by sea we look forward to
            serving your friends, family, or companies travel needs.
          </p>
          <div className={styles.buttonContainer}>
            <button className={`${styles.button} ${styles.button1}`}>
              <i class="bx bx-chevron-right"></i> BOOK NOW
            </button>
            <button className={`${styles.button} ${styles.button2}`}>
              SERVICES <span className={styles.diff2}>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.arrowIcon}>
          <Image
            onClick={handleArrowClick}
            className={styles.arrowImage}
            src={"/images/arrowIcon.png"}
            width={100}
            height={200}
            alt="Arrow Icon"
          />
        </div>
        <div className={styles.homeImageWrapper}>
          <Image
            className={styles.homeImage}
            src={"/images/home/home1.png"}
            width={500}
            height={700}
            alt="Airplane Image"
          />
          <Image
            className={styles.homeImage}
            src={"/images/home/home2.png"}
            width={500}
            height={700}
            alt="Airplane Image"
          />
          <Image
            className={styles.homeImage}
            src={"/images/home/home3.png"}
            width={500}
            height={700}
            alt="Airplane Image"
          />
          <Image
            className={styles.homeImage}
            src={"/images/home/home1.png"}
            width={500}
            height={700}
            alt="Airplane Image"
          />
          <Image
            className={styles.homeImage}
            src={"/images/home/home2.png"}
            width={500}
            height={700}
            alt="Airplane Image"
          />
          <Image
            className={styles.homeImage}
            src={"/images/home/home3.png"}
            width={500}
            height={700}
            alt="Airplane Image"
          />
        </div>
      </div>

      <div className={styles.socialContainer}>
        <Link href={"/"} className={styles.socialIcon}>
          <i class="bx bxl-instagram"></i>
        </Link>
        <Link href={"/"} className={styles.socialIcon}>
          <i class="bx bxl-facebook"></i>
        </Link>
        <Link href={"/"} className={styles.socialIcon}>
          <i class="bx bx-envelope"></i>
        </Link>
      </div>

      <Image
        src={"/images/home/homeLines.png"}
        width={2000}
        height={2000}
        alt="Line Illustration"
        className={styles.backgroundImage}
      />
    </div>
  );
};

export default HomeSection;
