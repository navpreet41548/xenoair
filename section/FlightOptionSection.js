import React from "react";
import styles from "@/styles/FlightOptionSection.module.css";
import Image from "next/image";

const FlightOptionSection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Flight Options</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Image
              className={styles.icon}
              src={"/images/flightOption/icon1.png"}
              width={200}
              height={200}
            />
            <h2 className={styles.cardHeading}>Scheduled Flights</h2>
          </div>
          <p className={styles.cardPara}>
            Dive into our curated selection of pre-planned routes and reserve an
            entire private jet exclusively for you and your entourage. Whether
            you're journeying for business, pleasure, or a bit of both, our
            scheduled flights offer the convenience of set itineraries combined
            with the luxury and privacy of your own aircraft. Simply choose your
            desired route, and let XenoAir handle the rest, ensuring an
            impeccable and seamless travel experience for you and your guests.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Image
              className={styles.icon}
              src={"/images/flightOption/icon2.png"}
              width={200}
              height={200}
            />
            <h2 className={styles.cardHeading}>On-Demand Flights</h2>
          </div>
          <p className={styles.cardPara}>
            Experience the epitome of personalized travel with our on-demand
            flights. Whether you're seeking a last-minute getaway or a bespoke
            journey tailored to your precise specifications, XenoAir empowers
            you to charter your own private jet. Dictate your departure times,
            choose your destinations, and indulge in a flight experience
            meticulously crafted around your desires. With XenoAir's on-demand
            services, the sky isn't the limit; it's just the beginning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlightOptionSection;
