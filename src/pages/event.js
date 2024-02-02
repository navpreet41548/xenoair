import React from "react";
import styles from "@/styles/Event.module.css";
import Image from "next/image";
import Link from "next/link";

const Event = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.heading}>Special Event & Planning</h1>
        <p className={styles.para}>
          Whether it's a wedding, corporate event, or birthday celebration,
          we're here to make it unforgettable. Click the 'Contact Us' button
          below to get in touch. Let's turn your vision into a remarkable event
          together.
        </p>
        <Link href="/event-inquiry" className={styles.button}>
          CONTACT US
        </Link>
      </div>
      <div className={styles.right}>
        <Image
          className={styles.image}
          src={"/images/event/image1.png"}
          width={1000}
          height={1000}
          alt="Event Image Collage"
        />
      </div>
    </div>
  );
};

export default Event;
