import React from "react";
import styles from "@/styles/AboutSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className={styles.aboutContainer} id="about">
      <div className={styles.left}>
        <div className={styles.content}>
          <h3 className={styles.tagLine}>ABOUT US</h3>
          <motion.div
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
            className={styles.headingWrapper}
          >
            <h2 className={styles.mainHeading}>
              Travel privately, anywhere, anytime.
            </h2>
          </motion.div>
          <p className={styles.mainPara}>
            With our meticulous focus on curating individualized flight
            experiences, we cater to the nuanced needs of business-owners,
            executives, entrepreneurs, and luxury aficionados alike.
          </p>
          <p className={styles.mainPara}>
            More than just a flight, XenoAir embodies a lifestyle. We don't just
            aim to be part of the luxury travel industry; we aim to
            revolutionize it.
          </p>
          <Link href="/services" className={styles.button}>
            <i class="bx bx-chevron-right"></i> OUR SERVICES
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.backgroundImage}
            src={"/images/about/backgroundImage.png"}
            width={1000}
            height={800}
            alt="Background Image"
          />

          <div className={styles.cardSubContainer}>
            <motion.div
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
              className={styles.card}
            >
              <Image
                className={styles.icon}
                src={"/images/about/icon1.png"}
                width={200}
                height={200}
              />
              <h4 className={styles.cardHeading}>White-Glove Service</h4>
              <p className={styles.cardPara}>
                From booking to landing, each XenoAir journey is meticulously
                planned to deliver the highest standards of luxury and
                convenience.
              </p>
            </motion.div>
            <motion.div
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
                delay: 0.8,
              }}
              className={styles.card}
            >
              <Image
                className={styles.icon}
                src={"/images/about/icon2.png"}
                width={200}
                height={200}
              />
              <h4 className={styles.cardHeading}>Competitive Pricing</h4>
              <p className={styles.cardPara}>
                Despite our high-end services, our pricing remains competitive,
                giving clients excellent value for their money.
              </p>
            </motion.div>
          </div>
          <div className={styles.cardSubContainer}>
            <motion.div
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
                delay: 1,
              }}
              className={`${styles.card} ${styles.cardActive}`}
            >
              <Image
                className={styles.icon}
                src={"/images/about/icon3.png"}
                width={200}
                height={200}
              />
              <h4 className={styles.cardHeading}>Elite Fleet</h4>
              <p className={styles.cardPara}>
                From light jets to global jets, our fleet is spans a wide
                variety custom spec'd aircraft to accomodate any need and any
                request you may have at anytime.
              </p>
            </motion.div>
            <motion.div
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
                delay: 1.2,
              }}
              className={styles.card}
            >
              <Image
                className={styles.icon}
                src={"/images/about/icon4.png"}
                width={200}
                height={200}
              />
              <h4 className={styles.cardHeading}>Unparalleled Add-Ons</h4>
              <p className={styles.cardPara}>
                Our ability to customize and personalize your enire travel
                experience from your home to your home away, allows us to truly
                serve at the pleasure of our customers.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
