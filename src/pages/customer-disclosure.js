import React from "react";
import styles from "@/styles/CustomerDisclosure.module.css";
import Head from "next/head";

const customerDisclosure = () => {
  return (
    <>
      <Head>
        <title>CUSTOMER DISCLOSURE</title>
        <meta name="description" content="Customer Disclosure" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h2 className={styles.cardHeading}>CUSTOMER DISCLOSURE</h2>
            <p className={styles.cardPara}>
              At XenoAir, we deeply value our collaboration with our Jet
              Partners – it's the very essence that enables us to provide
              flights at such exceptional rates! Our commitment to maintaining
              this harmonious relationship requires that all XenoAir members and
              their guests uphold the highest standards of respect towards
              everyone on board and the aircraft itself.
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardHeading}>ZERO TOLERANCE POLICY</h2>
            <p className={styles.cardPara}>
              In the event a Jet Partner reports any form of misconduct by the
              guests including but not limited to intentional harm to the
              aircraft, excessive consumption of alcohol, smoking, or defiance
              of the Captain's directives, such actions may initiate a review
              process. This review process will involve a comprehensive
              evaluation of the reported incident. Only upon conclusion of this
              review and confirmation of misconduct will measures be taken,
              which may include the immediate termination of your XenoAir
              account and designation on XenoAir's no-fly list. Adherence to
              this policy, which includes both the reporting and review
              mechanisms, is a non-negotiable requisite during the booking
              process.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default customerDisclosure;
