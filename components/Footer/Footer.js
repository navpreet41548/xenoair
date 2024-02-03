import React, { useState } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { toast } from "react-toastify";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerUpper}>
        <Link href={"/"} className={styles.col1}>
          <Image
            src={"/images/logo.png"}
            width={200}
            height={200}
            className={styles.logo}
          />
        </Link>
        <div className={styles.col2}>
          <h3 className={styles.colHeading}>Helpful</h3>
          <Link href={"/"} className={styles.colPara}>
            Home
          </Link>
          <Link href={"/#about"} className={styles.colPara}>
            About
          </Link>
          <Link href={"/contact"} className={styles.colPara}>
            Contact
          </Link>
        </div>
        <div className={styles.col3}>
          <h3 className={styles.colHeading}>Pricing</h3>
          <Link href={"/membership"} className={styles.colPara}>
            Membership
          </Link>
          <Link href={"/enterprice"} className={styles.colPara}>
            EnterPrices
          </Link>
          <Link href={"/weekly-deals"} className={styles.colPara}>
            Newsletter
          </Link>
        </div>
        <div className={styles.col4}>
          <h3 className={styles.colHeading}>Legal</h3>
          <Link href={"/customer-disclosure"} className={styles.colPara}>
            Customer Disclosure
          </Link>
        </div>
        <div className={styles.col5}>
          <h3 className={styles.colHeading}>Follow Us</h3>
          <div className={styles.socialContainer}>
            <a
              href={"https://www.instagram.com/officialxenoair"}
              className={styles.socialIcon}
            >
              <i class="bx bxl-instagram"></i>
            </a>
            <Link href={"/"} className={styles.socialIcon}>
              <i class="bx bxl-facebook"></i>
            </Link>
            <a href={"mailto:info@xenoair.com"} className={styles.socialIcon}>
              <i class="bx bx-envelope"></i>
            </a>
          </div>
        </div>
        <div className={styles.col6}>
          <Link href={"/weekly-deals"} className={styles.button}>
            <span className={styles.iconSpan}>
              <i class="bx bx-link-external"></i>
            </span>
            Newsletter
          </Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerPara}>
          XenoAir, LLC arranges air transportation for customers through
          licensed air carriers. Flights are chartered under 14 CFR Part 135,
          with the licensed carrier having operational control. XenoAir is an
          air charter broker and agent, not a carrier. Liability insurance is
          provided by the operator, not XenoAir. Flights are subject to the
          operator's Terms and Conditions of Carriage. By requesting a quote on
          the XenoAir website, the customer appoints XenoAir as its agent to
          secure charter flight offers from qualified providers.
        </p>
        <div className={styles.att}>
          <h4 className={styles.copyright}>
            &copy; 2024 XENOAIR. All Rights Reserved.
          </h4>
          <h4 className={styles.credit}>
            Site By <span className={styles.diff}>Name</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
