import React from "react";
import styles from "@/styles/Services.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";

const Services = () => {
  return (
    <>
      <Head>
        <title>SERVICES</title>
        <meta
          name="description"
          content="Trust us to handle your private jet transactions. We connect buyers and sellers, ensuring a seamless process. Buy or sell with confidence."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <div className={styles.container}>
        <div className={styles.headingWrapper}>
          <motion.h1
            whileInView={{
              transform: "translateY(0%)",
              opacity: 1,
            }}
            initial={{
              transform: "translateY(-50%)",
              opacity: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
            }}
            className={styles.mainHeading}
          >
            Your Trusted Jet Brokerage Partner
          </motion.h1>
        </div>
        <p className={styles.mainPara}>
          Trust us to handle your private jet transactions. We connect buyers
          and sellers, ensuring a seamless process. Buy or sell with confidence.
        </p>
        <Link href={"/contact"} className={styles.mainButton}>
          Contact Us
        </Link>

        <div className={styles.serviceContainer}>
          <div className={styles.contentPart}>
            <motion.h2
              whileInView={{
                transform: "translateY(0%)",
                opacity: 1,
              }}
              initial={{
                transform: "translateY(-50%)",
                opacity: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
              className={styles.serviceHeading}
            >
              Aircraft Sales & Acquisition
            </motion.h2>
            <p className={styles.servicePara}>
              The world of private jet ownership opens up unparalleled
              possibilities for travel. We've been privileged to assist numerous
              clients in making their aircraft dreams a reality. Now, it's your
              turn to soar to new heights with us by your side
            </p>
            <Link href={"/contact"} className={styles.serviceButton}>
              Contact Us
            </Link>
          </div>
          <motion.div
            whileInView={{
              transform: "scale(1)",
              opacity: 1,
            }}
            initial={{
              transform: "scale(0.5)",
              opacity: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
            }}
            className={styles.imageContainer}
          >
            <Image
              className={styles.serviceImage}
              src={"/images/services/image1.png"}
              width={1000}
              height={1000}
              alt="Private Jet Images"
            />
          </motion.div>
        </div>
        <div
          className={` ${styles.serviceContainer} ${styles.serviceContainerMiddle}`}
        >
          <motion.div
            whileInView={{
              opacity: 1,
              transform: "scale(1)",
            }}
            initial={{
              opacity: 0,
              transform: "scale(0.5)",
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
            }}
            className={styles.imageContainer}
          >
            <Image
              className={styles.serviceImage}
              src={"/images/services/image1.png"}
              width={1000}
              height={1000}
              alt="Private Jet Images"
            />
          </motion.div>
          <div className={styles.contentPart}>
            <motion.h2
              whileInView={{
                transform: "translateY(0%)",
                opacity: 1,
              }}
              initial={{
                transform: "translateY(-50%)",
                opacity: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
              className={styles.serviceHeading}
            >
              Aircraft Leasing
            </motion.h2>
            <p className={styles.servicePara}>
              Aircraft leasing offers an attractive alternative to ownership,
              allowing you to enjoy the privileges of private aviation without
              the responsibilities. Explore our leasing options and experience
              the freedom to travel on your schedule, in the aircraft of your
              choice.
            </p>
            <Link href={"/contact"} className={styles.serviceButton}>
              Contact Us
            </Link>
          </div>
        </div>
        <div className={styles.serviceContainer}>
          <div className={styles.contentPart}>
            <motion.h2
              whileInView={{
                transform: "translateY(0%)",
                opacity: 1,
              }}
              initial={{
                transform: "translateY(-50%)",
                opacity: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
              className={styles.serviceHeading}
            >
              Aircraft Management
            </motion.h2>
            <p className={styles.servicePara}>
              Experience worry-free aviation with our aircraft management
              services. We take care of all the complexities, from maintenance
              and crew management to operational logistics, so you can enjoy the
              benefits of aircraft ownership without the hassles. Trust us to
              keep your aircraft flying smoothly and efficiently.
            </p>
            <Link href={"/contact"} className={styles.serviceButton}>
              Contact Us
            </Link>
          </div>
          <motion.div
            whileInView={{
              transform: "scale(1)",
              opacity: 1,
            }}
            initial={{
              transform: "scale(0.5)",

              opacity: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
            }}
            className={styles.imageContainer}
          >
            <Image
              className={styles.serviceImage}
              src={"/images/services/image3.png"}
              width={1000}
              height={1000}
              alt="Private Jet Images"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
