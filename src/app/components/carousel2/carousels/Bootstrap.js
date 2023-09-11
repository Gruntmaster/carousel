"use client";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./feedbackCard.module.css";
import feedbackData from "../public/Item.json"; // Import the feedback data

export default function BootstrapCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Use the data from feedbackData.json
  const { bootstrap } = feedbackData.items;

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bootstrap.map((item) => (
        <Carousel.Item
          key={item.id}
          className={styles.container}
          interval={4000}
        >
          <img src={item.logoSrc} alt="logo" className={styles.logo} />
          <div className={styles.line}></div>
          <div className={styles.companyName}>{item.companyName}</div>
          <img
            src={item.projectImageSrc}
            alt="energy"
            className={styles.projectImage}
          />
          <div className={styles.skewed}></div>
          <div className={styles.starRow}>{item.starRating}</div>
          <div className={styles.skewed3}></div>
          <div className={styles.date}>{item.date}</div>
          <div className={styles.header1}>
            Description:
            <div className={styles.text1}>{item.description}</div>
          </div>
          <div className={styles.header2}>
            Comment:
            <div className={styles.text2}>{item.comment}</div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
