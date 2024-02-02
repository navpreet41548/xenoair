import React, { useState } from "react";
import styles from "@/styles/FaqSection.module.css";

const FaqSection = () => {
  const faqData = [
    {
      question: "Can I fly as a non-member?",
      answer:
        "Yes! You do not have to be a member to book a flight with us. But members do save up to 25% on flights.",
    },
    {
      question: "What are the benefits of flying private?",
      answer:
        "Privacy: Flying private offers a more private and exclusive travel experience compared to standard airlines.\nComfort: Our fleet offers luxurious amenities, spacious cabins, and personalized services; ensuring a comfortable journey.\nTime savings: Private jets can fly directly to your destination, eliminating layovers and reducing overall travel time.\nProductivity: The privacy and quiet environments on private jets enable you to work or conduct meetings during the flight.",
    },
    {
      question:
        "Do I have to go through TSA when checking in for a private flight?",
      answer:
        "You will be departing from a Fixed Base Operator (FBO) where security is a little different than standard air travel. We will use passenger information for TSA clearance ahead of your flight - expediting your boarding process and allowing for quicker check-ins and faster security.",
    },
    {
      question: "What information do I need to provide for my booking?",
      answer:
        "The following information is required for anyone flying: full name, residential address, date of birth, weight, gender, and the number of luggage times along with their total weight. You can also provide a Known Traveller Number if you have one.",
    },
    {
      question: "Is there a cancellation policy?",
      answer:
        "Scheduled Flights cannot be refunded due to the nature of the flights. For on-demand charters, we will make our best effort to work with operators to help you receive a full refund. But as it stands, cancellations are as follows:\n50% refund if cancelled within 168 hours of departure.\n30% refund if cancelled within 120 hours of departure.\nNo refund if cancelled within 96 hours of departure.",
    },
    {
      question: "How much will a flight cost?",
      answer:
        "Flight prices will vary based on flight length and the jet you will be flying on. Please contact us for pricing inquiries.",
    },
    {
      question: "Who will be flying the jets?",
      answer:
        "FAA licensed pilots staffed by our operators who hold them to the highest of standards.",
    },
    {
      question: "Where am I able to fly to?",
      answer:
        "Currently, we are servicing the United States along with parts of Canada and Mexico. Additional international flights will be added in the coming months.",
    },
    {
      question: "How many other people are on my flight?",
      answer:
        "Booking a flight with XenoAir means you are reserving the entire jet exclusively for you and your guests. Regardless of whether you are flying alone or with a full jet, the price remains the same.",
    },
    {
      question: "What is the maximum number of passengers I can fly with?",
      answer:
        "This varies depending on the aircraft you will be flying on. Our fleet sizes range from very light jets for 4-6 passengers to super heavy jets for 12-18 passengers. You will be notified of your maximum during the booking process.\n\nIf required, a larger jet for over 18+ passengers can be specially requested.",
    },
    {
      question: "Can I book flights online?",
      answer:
        "Due to the number of operators we work with, we hit a hurdle when building a seamless online booking portal so we have decided to release this at a later date.",
    },
    {
      question: "Am I able to book multi-stop trips?",
      answer:
        "Yes, we are able to customize your itinerary to your needs. For example, if you would like to stay in one location a few days before flying to your final destination.",
    },
    {
      question:
        "Are in-flight meals and other services included with my booking?",
      answer:
        "Majority of flights will have standard refreshments and snacks available for passengers, but the extent of in-flight amenities will vary depending on the size of the jet and length of the flight. If you would like specific amenities, please do not hesitate to ask your booking point of contact.",
    },
    {
      question: "What happens if my flight is cancelled?",
      answer:
        "In the unlikely event your flight gets canceled, you will receive a full refund within 72 hours. We will also explore the possibility of booking you on another available flight.",
    },
    {
      question: "Can I bring pets on my flight?",
      answer:
        "This is up to the discretion of the operator for your flight; please let us know ahead of time to ensure no problems arise.",
    },
  ];

  const handleQuestionClick = (index) => {
    // setClickedIndex(index);
    const answer = document.getElementsByClassName(styles.answer)[index];
    const arrowIcon = document.getElementsByClassName(styles.arrowIcon)[index];
    answer.classList.toggle(styles.answerActive);
    arrowIcon.classList.toggle(styles.arrowIconActive);
  };

  return (
    <div className={styles.container}>
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
              <div className={styles.arrowIcon}>
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

export default FaqSection;
