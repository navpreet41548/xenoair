import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";
import Image from "next/image";

const Navbar = () => {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const removeClass = () => {
    setIsOpen(false);
    menuRef.current.classList.remove(`${styles.navCenterActive}`);
    navRef.current.classList.remove(`${styles.navActive}`);
    buttonRef.current.classList.remove(`${styles.navButtonActive}`);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    menuRef.current.classList.toggle(`${styles.navCenterActive}`);
    navRef.current.classList.toggle(`${styles.navActive}`);
    buttonRef.current.classList.toggle(`${styles.navButtonActive}`);
  };

  // Function to add the "stickyNav" class when scrolling down
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      console.log("SCrolels");
      // Add the sticky class when scrolled a little bit (adjust as needed)
      navRef.current.classList.add(styles.stickyNav);
    } else {
      // Remove the sticky class when scrolled back to the top
      navRef.current.classList.remove(styles.stickyNav);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.nav} ref={navRef}>
      <Link href={"/"} className={styles.navLeft}>
        <Image
          className={styles.logo}
          width={300}
          height={300}
          alt="Logo"
          src={"/images/logo.png"}
        />
      </Link>
      <ul className={styles.navCenter} ref={menuRef}>
        <li>
          <Link onClick={removeClass} className={styles.navLink} href={"/"}>
            HOME
          </Link>
        </li>
        <li>
          <Link
            onClick={removeClass}
            className={styles.navLink}
            href={"/services"}
          >
            SERVICES
          </Link>
        </li>
        <li>
          <Link
            onClick={removeClass}
            className={styles.navLink}
            href={"/membership"}
          >
            MEMBERSHIP
          </Link>
        </li>
        <li>
          <Link
            onClick={removeClass}
            className={styles.navLink}
            href={"/enterprice"}
          >
            ENTERPRISE
          </Link>
        </li>
        <li>
          <Link
            onClick={removeClass}
            className={styles.navLink}
            href={"/event"}
          >
            EVENT
          </Link>
        </li>
        <li>
          <Link
            onClick={removeClass}
            className={styles.navLink}
            href={"/weekly-deals"}
          >
            WEEKLY DEALS
          </Link>
        </li>
        <li>
          <Link
            onClick={removeClass}
            className={styles.navLink}
            href={"/contact"}
          >
            CONTACT
          </Link>
        </li>
      </ul>
      <div className={styles.navRight}>
        <Link className={styles.navButton} href={"/book"} ref={buttonRef}>
          <i class="bx bxs-plane-take-off"></i> BOOK NOW
        </Link>
      </div>
      <div className={styles.burger} onClick={toggleMenu}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
