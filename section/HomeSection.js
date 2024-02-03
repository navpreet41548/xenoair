import React from "react";
import Image from "next/image";
import styles from "@/styles/HomeSection.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

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
          <div className={styles.headingWrapper}>
            <motion.h1
              whileInView={{
                transform: "translateY(0%) rotate(0)",
                opacity: 1,
              }}
              initial={{
                transform: "translateY(120%) rotate(10deg)",
                opacity: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6,
              }}
              className={styles.mainHeading}
            >
              Anytime, Anywhere, We're Here for Your Travel Needs
            </motion.h1>
          </div>
          <p className={styles.para}>
            Anytime, anywhere, by land, by air, or by sea we look forward to
            serving your friends, family, or companies travel needs.
          </p>
          <div className={styles.buttonContainer}>
            <Link href="/book" className={`${styles.button} ${styles.button1}`}>
              <i class="bx bx-chevron-right"></i> BOOK NOW
            </Link>
            <Link
              href={"#flightOptions"}
              className={`${styles.button} ${styles.button2}`}
            >
              SERVICES <span className={styles.diff2}>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
      <motion.div
        whileInView={{
          opacity: 1,
          transform: "translateY(0%) ",
        }}
        initial={{
          opacity: 0,
          transform: "translateY(100%) ",
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.6,
        }}
        className={styles.right}
      >
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
            src={"/images/home/home4.png"}
            width={500}
            height={700}
            alt="Airplane Image"
          />
          <Image
            className={styles.homeImage}
            src={"/images/home/home5.png"}
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
        </div>
      </motion.div>

      <div className={styles.socialContainer}>
        <motion.a
          whileInView={{
            transform: "scale(1)",
            opacity: 1,
          }}
          initial={{
            transform: "scale(0)",
            opacity: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
          }}
          href={"https://www.instagram.com/officialxenoair"}
          className={styles.socialIcon}
        >
          <i class="bx bxl-instagram"></i>
        </motion.a>
        <motion.a
          whileInView={{
            transform: "scale(1)",
            opacity: 1,
          }}
          initial={{
            transform: "scale(0)",
            opacity: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
          }}
          href={"/"}
          className={styles.socialIcon}
        >
          <i class="bx bxl-facebook"></i>
        </motion.a>
        <motion.a
          whileInView={{
            transform: "scale(1)",
            opacity: 1,
          }}
          initial={{
            transform: "scale(0)",
            opacity: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
          }}
          href={"mailto:info@xenoair.com"}
          className={styles.socialIcon}
        >
          <i class="bx bx-envelope"></i>
        </motion.a>
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
