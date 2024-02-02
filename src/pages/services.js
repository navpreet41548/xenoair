import React from "react";
import styles from "@/styles/Services.module.css";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>Your Trusted Jet Brokerage Partner</h1>
      <p className={styles.mainPara}>
        Trust us to handle your private jet transactions. We connect buyers and
        sellers, ensuring a seamless process. Buy or sell with confidence.
      </p>
      <Link href={"/contact"} className={styles.mainButton}>
        Contact Us
      </Link>

      <div className={styles.serviceContainer}>
        <div className={styles.contentPart}>
          <h2 className={styles.serviceHeading}>
            Aircraft Sales & Acquisition
          </h2>
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
        <div className={styles.imageContainer}>
          <Image
            className={styles.serviceImage}
            src={"/images/services/image1.png"}
            width={1000}
            height={1000}
            alt="Private Jet Images"
          />
        </div>
      </div>
      <div
        className={` ${styles.serviceContainer} ${styles.serviceContainerMiddle}`}
      >
        <div className={styles.imageContainer}>
          <Image
            className={styles.serviceImage}
            src={"/images/services/image1.png"}
            width={1000}
            height={1000}
            alt="Private Jet Images"
          />
        </div>
        <div className={styles.contentPart}>
          <h2 className={styles.serviceHeading}>Aircraft Leasing</h2>
          <p className={styles.servicePara}>
            Aircraft leasing offers an attractive alternative to ownership,
            allowing you to enjoy the privileges of private aviation without the
            responsibilities. Explore our leasing options and experience the
            freedom to travel on your schedule, in the aircraft of your choice.
          </p>
          <Link href={"/contact"} className={styles.serviceButton}>
            Contact Us
          </Link>
        </div>
      </div>
      <div className={styles.serviceContainer}>
        <div className={styles.contentPart}>
          <h2 className={styles.serviceHeading}>Aircraft Management</h2>
          <p className={styles.servicePara}>
            Experience worry-free aviation with our aircraft management
            services. We take care of all the complexities, from maintenance and
            crew management to operational logistics, so you can enjoy the
            benefits of aircraft ownership without the hassles. Trust us to keep
            your aircraft flying smoothly and efficiently.
          </p>
          <Link href={"/contact"} className={styles.serviceButton}>
            Contact Us
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.serviceImage}
            src={"/images/services/image3.png"}
            width={1000}
            height={1000}
            alt="Private Jet Images"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
