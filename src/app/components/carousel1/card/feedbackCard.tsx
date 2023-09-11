import React from "react";
import styles from "./feedbackCard.module.css";

interface FeedbackProps {
  companyName: string;
  description: string; // Add description property
  comment: string; // Add comment property
  image: string; // Add image property
  customClassName?: string; // Add customClassName prop
}

const Feedback: React.FC<FeedbackProps> = ({
  companyName,
  description,
  comment,
  image,
}) => {
  return (
    <div className={styles.container}>
      <img src="/market_idea_logo.svg" alt="logo" className={styles.logo} />
      <div className={styles.line}></div>
      <div className={styles.companyName}>{companyName}</div>
      <img src={image} alt="img" className={styles.projectImage} />
      <div className={styles.skewed}></div>
      <div className={styles.starRow}>⭐⭐⭐⭐⭐</div>
      <div className={styles.skewed3}></div>
      <div className={styles.date}>09.09.2023</div>
      <div className={styles.header1}>
        Description:
        <div className={styles.text1}>{description}</div>
      </div>
      <div className={styles.header2}>
        Comment:
        <div className={styles.text2}>{comment}</div>
      </div>
    </div>
  );
};

export default Feedback;
