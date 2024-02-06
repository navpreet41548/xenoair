import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/HomeSection.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const HomeSection = () => {
  const handleArrowClick = () => {
    const rightContainer = document.getElementsByClassName(styles.right)[0];
    rightContainer.classList.toggle(styles.rightActive);
  };
  // Arrays of image pairs you want to rotate together
  const imagePairs = [
    ["/images/home/home1.png", "/images/home/home2.png"], // First pair
    ["/images/home/home3.png", "/images/home/home4.png"], // Second pair, replace with your actual image paths
    ["/images/home/home5.png", "/images/home/home6.png"], // Second pair, replace with your actual image paths
    ["/images/home/home7.png", "/images/home/home8.png"], // Second pair, replace with your actual image paths
    ["/images/home/home9.png", "/images/home/home5.png"], // Second pair, replace with your actual image paths
  ];

  // State to manage which pair of images is visible
  const [visiblePairIndex, setVisiblePairIndex] = useState(0);
  const [opacity, setOpacity] = useState("visible"); // New state to manage opacity

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity("hidden"); // First, make the images invisible
      setTimeout(() => {
        setVisiblePairIndex((prevIndex) => (prevIndex + 1) % imagePairs.length); // Then change the image pair
        setOpacity("visible"); // Finally, make the new images visible
      }, 1000); // Wait for the opacity transition to complete before changing the images
    }, 4000); // Increase interval to include opacity transition time

    return () => clearInterval(intervalId);
  }, [imagePairs.length]);
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
          {/* <Image
            onClick={handleArrowClick}
            className={styles.arrowImage}
            src={"/images/arrowIcon.png"}
            width={100}
            height={200}
            alt="Arrow Icon"
          /> */}
        </div>
        <div className={styles.homeImageWrapper}>
          {imagePairs[visiblePairIndex].map((src, index) => (
            <Image
              key={src}
              className={`${styles.homeImage} ${styles[opacity]}`}
              src={src}
              width={500}
              height={700}
              loading="eager"
              alt={`Rotating Image Pair ${visiblePairIndex + 1}, Image ${
                index + 1
              }`}
            />
          ))}
          <Image
            className={`${styles.homeImage} ${styles.homeImageHidden}`}
            src={"/images/home/home2.png"}
            width={500}
            height={700}
            loading="eager"
            alt="Airplane Image"
          />
          <Image
            className={`${styles.homeImage} ${styles.homeImageHidden}`}
            src={"/images/home/home4.png"}
            width={500}
            height={700}
            loading="eager"
            alt="Airplane Image"
          />
          <Image
            className={`${styles.homeImage} ${styles.homeImageHidden}`}
            src={"/images/home/home5.png"}
            width={500}
            height={700}
            loading="eager"
            alt="Airplane Image"
          />
          <Image
            className={`${styles.homeImage} ${styles.homeImageHidden}`}
            src={"/images/home/home3.png"}
            width={500}
            height={700}
            loading="eager"
            alt="Airplane Image"
          />
          <Image
            className={`${styles.homeImage} ${styles.homeImageHidden}`}
            src={"/images/home/home6.png"}
            width={500}
            height={700}
            loading="eager"
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
          href={"https://www.linkedin.com/company/xenoair"}
          className={styles.socialIcon}
        >
          <i class="bx bxl-linkedin-square"></i>
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
