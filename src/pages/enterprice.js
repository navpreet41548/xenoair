import React from "react";
import styles from "@/styles/Membership.module.css";
import Layout from "../../components/Layout";
import Link from "next/link";

const Enterprice = () => {
  const handleHeaderClick = (index) => {
    const addOnList = document.getElementsByClassName(styles.addOnList)[index];
    const arrowIcon = document.getElementsByClassName(styles.arrowIcon)[index];
    addOnList.classList.toggle(styles.addOnListActive);
    arrowIcon.classList.toggle(styles.arrowIconActive);
  };

  const faqData = [
    {
      question: "Cost Efficiency & Time Savings",
      answer:
        "Streamline your corporate travel with our efficient and economical solutions. We specialize in securing discounted rates, optimizing travel budgets, and making cost-effective arrangements. Our comprehensive service covers all travel planning and booking aspects, ensuring your team focuses on business, not logistics.",
    },
    {
      question: "24/7 Support",
      answer:
        "Travel with peace of mind knowing our team is available around the clock. Whether it's a travel emergency or a sudden change in plans, we're here to provide immediate assistance and support, anytime, anywhere.",
    },
    {
      question: "Carbon Offset Program",
      answer:
        "Embrace sustainability with our carbon offset program for each flight. Align your corporate travel with your sustainability goals, contributing positively to the environment.",
    },
    {
      question: "Group Travel Management",
      answer:
        "Organizing group travel is seamless with XenoAir. We handle everything from coordinating group bookings and logistics to negotiating favorable group rates for conferences, meetings, or corporate retreats.",
    },
    {
      question: "Reporting and Analytics",
      answer:
        "Gain valuable insights with our detailed travel reports and analytics. Track your travel expenditures, identify areas for cost reduction, and maintain adherence to travel policies, all through our comprehensive reporting tools.",
    },
    {
      question: "Travel Policy Compliance",
      answer:
        "Our services are tailored to respect and adhere to your company's travel policies. From preferred destinations and hotels to car rental arrangements, we ensure every booking is in line with your corporate standards.",
    },
    {
      question: "Personalized Service",
      answer:
        "Experience bespoke travel solutions crafted to meet your company's unique requirements. Our personalized service approach ensures that the specific needs of your company and its travelers are always prioritized and met with excellence.",
    },
    {
      question: "Visa and Documentation Support",
      answer:
        "Navigate the complexities of international travel with ease. XenoAir offers comprehensive support for visa applications, passport renewals, and all necessary travel-related documentation. Our expert team ensures your travel is hassle-free, managing the finer details of international requirements.",
    },
    {
      question: "Enterprise Frequent Flyer Benefits",
      answer:
        "Elevate your corporate travel with XenoAir's Frequent Flyer Program. The more your corporation flies, the greater the rewards. Enjoy enhanced benefits, exclusive services, and preferential rates in the future, making every business journey an opportunity for added value.",
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
    <div className={styles.container}>
      <h1 className={styles.heading}>Membership Tiers</h1>
      <p className={styles.para}>
        From those looking for a sprinkle of luxury to those demanding the full
        white-glove experience, we've got a package tailored for every occasion.
        From business excursions to lavish getaways, we ensure your journey is
        unparalleled.
      </p>
      <p className={styles.smallPara}>
        Start with a $0 initiation fee, add your chosen initial block fund, and
        maintain your exclusive services with a $5,000 annual renewal fee.
      </p>
      <p className={styles.smallPara}>
        Note: At renewal, ensure your account balance is equal to 10% of the
        initial funding amount; if not, a simple re-fund is all it takes to
        continue your luxury experience.
      </p>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardUpper}>
            <h3 className={styles.planName}>SMALL ENTERPRISE</h3>

            <p className={styles.cardPoint}>
              Unlimited flights at member pricing
            </p>
            <p className={styles.cardPoint}>Unlimited lead passengers</p>
            <p className={styles.cardPoint}>
              365 day access with 48 hour notice
            </p>
            <div className={styles.includedSection}>
              <h4 className={styles.cardHeading}>
                Included fee with membership
              </h4>
              <ul className={styles.checklist}>
                <li className={styles.checklistItem}>
                  <i class="bx bxs-check-circle"></i>
                  <p className={styles.checklistText}>Chauffeur Services</p>
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
                    Professional Photography
                  </li>
                  <li className={styles.addOnListItem}>Exotic Car Rentals</li>
                  <li className={styles.addOnListItem}>
                    Flight Attendant Upon Request
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a
            href={
              "https://api.leadconnectorhq.com/widget/booking/7wD4PmAWuoW724FdDGG7"
            }
            className={styles.button}
          >
            Get Started
          </a>
        </div>
        <div className={styles.card}>
          <div className={styles.cardUpper}>
            <h3 className={styles.planName}>MEDIUM ENTERPRISE</h3>
            <p className={styles.cardPoint}>
              Unlimited flights at member pricing
            </p>
            <p className={styles.cardPoint}>Unlimited lead passengers</p>
            <p className={styles.cardPoint}>
              365 day access with 48 hour notice
            </p>
            <div className={styles.includedSection}>
              <h4 className={styles.cardHeading}>
                Included fee with membership
              </h4>
              <ul className={styles.checklist}>
                <li className={styles.checklistItem}>
                  <i class="bx bxs-check-circle"></i>
                  <p className={styles.checklistText}>Chauffeur Services</p>
                </li>
                <li className={styles.checklistItem}>
                  <i class="bx bxs-check-circle"></i>
                  <p className={styles.checklistText}>Staging Services</p>
                </li>
                <li className={styles.checklistItem}>
                  <i class="bx bxs-check-circle"></i>
                  <p className={styles.checklistText}>
                    A catered meal per person on the flight
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
                  <li className={styles.addOnListItem}>Security Services</li>
                  <li className={styles.addOnListItem}>
                    Professional Photography
                  </li>
                  <li className={styles.addOnListItem}>Exotic Car Services</li>
                  <li className={styles.addOnListItem}>In-flight Catering</li>
                  <li className={styles.addOnListItem}>
                    Flight Attendant Upon Request
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a
            href={
              "https://api.leadconnectorhq.com/widget/booking/7wD4PmAWuoW724FdDGG7"
            }
            className={styles.button}
          >
            Get Started
          </a>
        </div>
        <div className={styles.card}>
          <div className={styles.cardUpper}>
            <h3 className={styles.planName}>LARGE ENTERPRISE</h3>
            <p className={styles.cardPoint}>
              Unlimited flights at member pricing
            </p>
            <p className={styles.cardPoint}>Unlimited lead passengers</p>
            <p className={styles.cardPoint}>
              365 day access with 48 hour notice
            </p>
            <div className={styles.includedSection}>
              <h4 className={styles.cardHeading}>
                Included fee with membership
              </h4>
              <ul className={styles.checklist}>
                <li className={styles.checklistItem}>
                  <i class="bx bxs-check-circle"></i>
                  <p className={styles.checklistText}>Chauffeur Services</p>
                </li>
                <li className={styles.checklistItem}>
                  <i class="bx bxs-check-circle"></i>
                  <p className={styles.checklistText}>Staging Services</p>
                </li>
                <li className={styles.checklistItem}>
                  <i class="bx bxs-check-circle"></i>
                  <p className={styles.checklistText}>
                    Professional Photography
                  </p>
                </li>
                <li className={styles.checklistItem}>
                  <i class="bx bxs-check-circle"></i>
                  <p className={styles.checklistText}>
                    A catered meal per person on the flight
                  </p>
                </li>
                <li className={styles.checklistItem}>
                  <i class="bx bxs-check-circle"></i>
                  <p className={styles.checklistText}>
                    Flight attendant upon request
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
                  <li className={styles.addOnListItem}>Exotic Car Services</li>
                  <li className={styles.addOnListItem}>In-flight Catering</li>
                </ul>
              </div>
            </div>
            <a
              href={
                "https://api.leadconnectorhq.com/widget/booking/7wD4PmAWuoW724FdDGG7"
              }
              className={styles.button}
            >
              Get Started
            </a>
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
                Unlimited Flights at Member's Price
              </h4>
            </div>
            <div className={styles.colBody}>
              <h4 className={styles.sideHeading}>Unlimited Lead Passengers</h4>
            </div>
            <div className={styles.colBody}>
              <h4 className={styles.sideHeading}>
                365 Day Access with 48 Hour Notice
              </h4>
            </div>
            <div className={styles.colBody}>
              <h4 className={styles.sideHeading}>Chauffeur Services</h4>
            </div>
            <div className={styles.colBody}>
              <h4 className={styles.sideHeading}>Staging Services</h4>
            </div>
            <div className={styles.colBody}>
              <h4 className={styles.sideHeading}>Professional Photography</h4>
            </div>
            <div className={styles.colBody}>
              <h4 className={styles.sideHeading}>A Catered Meal Per Person</h4>
            </div>
            <div className={styles.colBody}>
              <h4 className={styles.sideHeading}>
                Flight Attendant Upon Request
              </h4>
            </div>
            <div className={styles.colBody}>
              <h4 className={styles.sideHeading}>Exotic Car Rentals</h4>
            </div>
            <div className={styles.colBody}>
              <h4 className={styles.sideHeading}>
                In-Flight Catering Services
              </h4>
            </div>
            <div className={styles.colBody}>
              <h4 className={styles.sideHeading}>Security Services</h4>
            </div>
          </div>
          <div className={styles.col2}>
            <div className={styles.colHeader}>
              <h3 className={styles.planHeading}>SMALL</h3>
              <a
                href={
                  "https://api.leadconnectorhq.com/widget/booking/7wD4PmAWuoW724FdDGG7"
                }
                className={styles.planButton}
              >
                Get Started
              </a>
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
                <i class="bx bxs-x-circle"></i>
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
              <h3 className={styles.planHeading}>MEDIUM</h3>
              <a
                href={
                  "https://api.leadconnectorhq.com/widget/booking/7wD4PmAWuoW724FdDGG7"
                }
                className={styles.planButton}
              >
                Get Started
              </a>
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
          </div>
          <div className={styles.col4}>
            <div className={styles.colHeader}>
              <h3 className={styles.planHeading}>DIAMOND</h3>
              <a
                href={
                  "https://api.leadconnectorhq.com/widget/booking/7wD4PmAWuoW724FdDGG7"
                }
                className={styles.planButton}
              >
                Get Started
              </a>
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
        </div>
      </div>

      <h4 className={styles.swipeHeading}>
        <i class="bx bxs-chevrons-left"></i>Swipe
        <i class="bx bxs-chevrons-right"></i>
      </h4>

      <h2 className={styles.heading}>Benefits</h2>
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
  );
};

export default Enterprice;
