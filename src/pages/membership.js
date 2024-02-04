import React from "react";
import styles from "@/styles/Membership.module.css";
import Layout from "../../components/Layout";
import Link from "next/link";
import Head from "next/head";

const Membership = () => {
  const handleHeaderClick = (index) => {
    const addOnList = document.getElementsByClassName(styles.addOnList)[index];
    const arrowIcon = document.getElementsByClassName(styles.arrowIcon)[index];
    addOnList.classList.toggle(styles.addOnListActive);
    arrowIcon.classList.toggle(styles.arrowIconActive);
  };

  const faqData = [
    {
      question: "What is member pricing?",
      answer:
        "Members save upto 25% on scheduled flights and 17% for on-demand flights when compared to competitors pricing.",
    },
    {
      question: "How often can I fly?",
      answer:
        "With a XenoAir membership, you are able to fly as often as you would like.",
    },
    {
      question: "Are there any monthly memberships?",
      answer:
        "We do not provide any monthly memberships at the moment, but you do have the option to pay for your membership through Klarna or Affirm.",
    },
    {
      question: "Can I receive a prorated refund?",
      answer:
        "You can receive a prorated refund of your membership cost as long as none of the complimentary add-on services have been used.",
    },
  ];

  const handleQuestionClick = (index) => {
    // setClickedIndex(index);
    const answer = document.getElementsByClassName(styles.answer)[index];
    const arrowIcon = document.getElementsByClassName(styles.arrowIconFaq)[
      index
    ];
    answer.classList.toggle(styles.answerActive);
    arrowIcon.classList.toggle(styles.arrowIconActive);
  };
  return (
    <>
      <Head>
        <title>MEMBERSHIP</title>
        <meta
          name="description"
          content="From those looking for a sprinkle of luxury to those demanding the full white-glove experience, we've got a package tailored for every occasion. From business excursions to lavish getaways, we ensure your journey is unparalleled."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.heading}>Membership Tiers</h1>
        <p className={styles.para}>
          From those looking for a sprinkle of luxury to those demanding the
          full white-glove experience, we've got a package tailored for every
          occasion. From business excursions to lavish getaways, we ensure your
          journey is unparalleled.
        </p>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardUpper}>
              <h3 className={styles.planName}>GOLD</h3>
              <h3 className={styles.pricing}>
                2997 <span className={styles.priceDiff}>/PER ANNUM</span>
              </h3>
              <p className={styles.cardPoint}>
                Unlimited flights at member pricing
              </p>
              <div className={styles.includedSection}>
                <h4 className={styles.cardHeading}>
                  Included fee with membership
                </h4>
                <ul className={styles.checklist}>
                  <li className={styles.checklistItem}>
                    <i class="bx bxs-check-circle"></i>
                    <p className={styles.checklistText}>
                      Access to Special Events
                    </p>
                  </li>
                  <li className={styles.checklistItem}>
                    <i class="bx bxs-check-circle"></i>
                    <p className={styles.checklistText}>
                      Entries into raffle at a 1:1 flight to entry ratio
                    </p>
                  </li>
                </ul>

                <div className={styles.dropdownContainer}>
                  <div
                    className={styles.dropdownHeader}
                    onClick={() => handleHeaderClick(0)}
                  >
                    <h4 className={styles.cardHeading}>
                      Ability to purchase add-ons:
                    </h4>
                    <div className={styles.arrowIcon}>
                      <i class="bx bxs-chevron-down"></i>
                    </div>
                  </div>
                  <ul className={styles.addOnList}>
                    <li className={styles.addOnListItem}>Chauffeur Services</li>
                    <li className={styles.addOnListItem}>Stating Services</li>
                    <li className={styles.addOnListItem}>Security Services</li>
                    <li className={styles.addOnListItem}>
                      Professional Services
                    </li>
                    <li className={styles.addOnListItem}>
                      Exotic Car Services
                    </li>
                    <li className={styles.addOnListItem}>Catering Services</li>
                  </ul>
                </div>
              </div>
            </div>
            <Link href={"/membership-inquiry"} className={styles.button}>
              Get Started
            </Link>
          </div>
          <div className={styles.card}>
            <div className={styles.cardUpper}>
              <h3 className={styles.planName}>PLATINUM</h3>
              <h3 className={styles.pricing}>
                4997 <span className={styles.priceDiff}>/PER ANNUM</span>
              </h3>
              <p className={styles.cardPoint}>
                Unlimited flights at member pricing
              </p>
              <div className={styles.includedSection}>
                <h4 className={styles.cardHeading}>
                  Included fee with membership
                </h4>
                <ul className={styles.checklist}>
                  <li className={styles.checklistItem}>
                    <i class="bx bxs-check-circle"></i>
                    <p className={styles.checklistText}>Chauffeur Services</p>
                    <p className={styles.checkListTextDiff}>3 Time/Year</p>
                  </li>
                  <li className={styles.checklistItem}>
                    <i class="bx bxs-check-circle"></i>
                    <p className={styles.checklistText}>Staging Services</p>
                    <p className={styles.checkListTextDiff}>3 Time/Year</p>
                  </li>
                  <li className={styles.checklistItem}>
                    <i class="bx bxs-check-circle"></i>
                    <p className={styles.checklistText}>
                      Professional Photography
                    </p>
                    <p className={styles.checkListTextDiff}>3 Time/Year</p>
                  </li>
                  <li className={styles.checklistItem}>
                    <i class="bx bxs-check-circle"></i>
                    <p className={styles.checklistText}>
                      Access to Special Events
                    </p>
                  </li>
                  <li className={styles.checklistItem}>
                    <i class="bx bxs-check-circle"></i>
                    <p className={styles.checklistText}>
                      Entries into raffle at a 1:3 flight to entry ratio
                    </p>
                  </li>
                </ul>

                <div className={styles.dropdownContainer}>
                  <div
                    className={styles.dropdownHeader}
                    onClick={() => handleHeaderClick(1)}
                  >
                    <h4 className={styles.cardHeading}>
                      Ability to purchase add-ons:
                    </h4>
                    <div className={styles.arrowIcon}>
                      <i class="bx bxs-chevron-down"></i>
                    </div>
                  </div>
                  <ul className={styles.addOnList}>
                    <li className={styles.addOnListItem}>Chauffeur Services</li>
                    <li className={styles.addOnListItem}>Stating Services</li>
                    <li className={styles.addOnListItem}>Security Services</li>
                    <li className={styles.addOnListItem}>
                      Professional Services
                    </li>
                    <li className={styles.addOnListItem}>
                      Exotic Car Services
                    </li>
                    <li className={styles.addOnListItem}>Catering Services</li>
                  </ul>
                </div>
              </div>
            </div>
            <Link href={"/membership-inquiry"} className={styles.button}>
              Get Started
            </Link>
          </div>
          <div className={styles.card}>
            <div className={styles.cardUpper}>
              <h3 className={styles.planName}>DIAMOND</h3>
              <h3 className={styles.pricing}>
                9997 <span className={styles.priceDiff}>/PER ANNUM</span>
              </h3>
              <p className={styles.cardPoint}>
                Unlimited flights at member pricing
              </p>
              <div className={styles.includedSection}>
                <h4 className={styles.cardHeading}>
                  Included fee with membership
                </h4>
                <ul className={styles.checklist}>
                  <li className={styles.checklistItem}>
                    <i class="bx bxs-check-circle"></i>
                    <p className={styles.checklistText}>Chauffeur Services</p>
                    <p className={styles.checkListTextDiff}>
                      Unlimited Use ~ availability
                    </p>
                  </li>
                  <li className={styles.checklistItem}>
                    <i class="bx bxs-check-circle"></i>
                    <p className={styles.checklistText}>Staging Services</p>
                    <p className={styles.checkListTextDiff}>
                      Unlimited Use ~ availability
                    </p>
                  </li>
                  <li className={styles.checklistItem}>
                    <i class="bx bxs-check-circle"></i>
                    <p className={styles.checklistText}>
                      Professional Photography
                    </p>
                    <p className={styles.checkListTextDiff}>
                      Unlimited Use ~ availability
                    </p>
                  </li>
                  <li className={styles.checklistItem}>
                    <i class="bx bxs-check-circle"></i>
                    <p className={styles.checklistText}>Security Services</p>
                    <p className={styles.checkListTextDiff}>3 Time/Year</p>
                  </li>
                  <li className={styles.checklistItem}>
                    <i class="bx bxs-check-circle"></i>
                    <p className={styles.checklistText}>Exotic Car Rental</p>
                    <p className={styles.checkListTextDiff}>3 Time/Year</p>
                  </li>
                  <li className={styles.checklistItem}>
                    <i class="bx bxs-check-circle"></i>
                    <p className={styles.checklistText}>Catering Services</p>
                    <p className={styles.checkListTextDiff}>
                      Unlimited Use ~availability~
                    </p>
                  </li>
                  <li className={styles.checklistItem}>
                    <i class="bx bxs-check-circle"></i>
                    <p className={styles.checklistText}>
                      Access to Special Events
                    </p>
                  </li>
                  <li className={styles.checklistItem}>
                    <i class="bx bxs-check-circle"></i>
                    <p className={styles.checklistText}>
                      Entries into raffle at a 1:5 flight to entry ratio
                    </p>
                  </li>
                </ul>

                <div className={styles.dropdownContainer}>
                  <div
                    className={styles.dropdownHeader}
                    onClick={() => handleHeaderClick(2)}
                  >
                    <h4 className={styles.cardHeading}>
                      Ability to purchase add-ons:
                    </h4>
                    <div className={styles.arrowIcon}>
                      <i class="bx bxs-chevron-down"></i>
                    </div>
                  </div>
                  <ul className={styles.addOnList}>
                    <li className={styles.addOnListItem}>Security Services</li>
                    <li className={styles.addOnListItem}>
                      Exotic Car Services
                    </li>
                    <li className={styles.addOnListItem}>Catering Services</li>
                  </ul>
                </div>
              </div>
              <Link href={"/membership-inquiry"} className={styles.button}>
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.compareWrapper}>
          <div className={styles.compareContainer}>
            <div className={styles.col1}>
              <div className={styles.colHeader}>
                <h3 className={styles.compareHeading}>Compare plans</h3>
                <p className={styles.comparePara}>
                  Find one that's right for you
                </p>
              </div>
              <div className={styles.colBody}>
                <h4 className={styles.sideHeading}>
                  Entries into raffle, flight to entry ratio
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={styles.sideHeading}>Access to Special Events</h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={styles.sideHeading}>Chauffeur Service</h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={styles.sideHeading}>Staging Services</h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={styles.sideHeading}>Professional Photography</h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={styles.sideHeading}>Security Services</h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={styles.sideHeading}>Exotic Car Rentals</h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={styles.sideHeading}>Catering Service</h4>
              </div>
            </div>
            <div className={styles.col2}>
              <div className={styles.colHeader}>
                <h3 className={styles.planHeading}>GOLD</h3>
                <Link
                  href={"/membership-inquiry"}
                  className={styles.planButton}
                >
                  Get Started
                </Link>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextWhite}`}>
                  1:1
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextGold}`}>
                  <i class="bx bxs-check-circle"></i>
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextLight}`}>
                  Add-On
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextLight}`}>
                  Add-On
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextLight}`}>
                  Add-On
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextLight}`}>
                  Add-On
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextLight}`}>
                  Add-On
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextLight}`}>
                  Add-On
                </h4>
              </div>
            </div>
            <div className={styles.col3}>
              <div className={styles.colHeader}>
                <h3 className={styles.planHeading}>PLATINUM</h3>
                <Link
                  href={"/membership-inquiry"}
                  className={styles.planButton}
                >
                  Get Started
                </Link>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextWhite}`}>
                  1:3
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextGold}`}>
                  <i class="bx bxs-check-circle"></i>
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextWhite}`}>
                  3 Times / Year
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextWhite}`}>
                  3 Times / Year
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextWhite}`}>
                  3 Times / Year
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextLight}`}>
                  Add-On
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextLight}`}>
                  Add-On
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextLight}`}>
                  Add-On
                </h4>
              </div>
            </div>
            <div className={styles.col4}>
              <div className={styles.colHeader}>
                <h3 className={styles.planHeading}>DIAMOND</h3>
                <Link
                  href={"/membership-inquiry"}
                  className={styles.planButton}
                >
                  Get Started
                </Link>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextWhite}`}>
                  1:5
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextGold}`}>
                  <i class="bx bxs-check-circle"></i>
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextGold}`}>
                  <i class="bx bxs-check-circle"></i>
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextGold}`}>
                  <i class="bx bxs-check-circle"></i>
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextGold}`}>
                  <i class="bx bxs-check-circle"></i>
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextWhite}`}>
                  3 Times / Year
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextLight}`}>
                  Add-On
                </h4>
              </div>
              <div className={styles.colBody}>
                <h4 className={`${styles.boxText} ${styles.boxTextGold}`}>
                  <i class="bx bxs-check-circle"></i>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <h4 className={styles.swipeHeading}>
          <i class="bx bxs-chevrons-left"></i>Swipe
          <i class="bx bxs-chevrons-right"></i>
        </h4>

        <h2 className={styles.heading}>FAQs</h2>
        <div className={styles.faqWrapper}>
          {faqData.map((item, i) => (
            <>
              <div
                className={styles.question}
                onClick={() => handleQuestionClick(i)}
              >
                <div className={styles.icon}>
                  <i className="bx bxs-plane-alt"></i>
                </div>
                <h4 className={styles.questionText}>{item.question}</h4>
                <div className={styles.arrowIconFaq}>
                  <i className="bx bxs-chevron-down"></i>
                </div>
              </div>
              <div className={styles.answer}>
                <p className={styles.answerPara}>{item.answer}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Membership;
