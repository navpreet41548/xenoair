import React from "react";
import styles from "@/styles/CustomerDisclosure.module.css";

const customerDisclosure = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>CUSTOMER DISCLOSURE</h1>
        <p className={styles.para}>
          At XenoAir, we deeply value our collaboration with our Jet Partners –
          it's the very essence that enables us to provide flights at such
          exceptional rates!
        </p>
        <p className={styles.para}>
          Our commitment to maintaining this harmonious relationship requires
          that all XenoAir members and their guests uphold the highest standards
          of respect towards everyone on board and the aircraft itself.
        </p>
        <h1 className={styles.heading}>ZERO TOLERANCE POLICY</h1>
        <p className={styles.para}>
          In the event a Jet Partner reports any form of misconduct by the
          guests including but not limited to intentional harm to the aircraft,
          excessive consumption of alcohol, smoking, or defiance of the
          Captain's directives, such actions may initiate a review process. This
          review process will involve a comprehensive evaluation of the reported
          incident. Only upon conclusion of this review and confirmation of
          misconduct will measures be taken, which may include the immediate
          termination of your XenoAir account and designation on XenoAir's
          no-fly list. Adherence to this policy, which includes both the
          reporting and review mechanisms, is a non-negotiable requisite during
          the booking process.
        </p>
      </div>
    </div>
  );
};

export default customerDisclosure;
