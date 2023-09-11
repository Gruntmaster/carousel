"use client";
import React, { useState, useRef } from "react";
import Feedback from "../card/feedbackCard"; // Import your Feedback component
import styles from "./carousel.module.css";

const feedbackData = [
  {
    id: 1,
    companyName: "Company Name 1",
    description: "Description for Card 1",
    comment: "Comment for Card 1",
    image: "/energyCorporation.png", // Add image URL for Card 1
  },
  {
    id: 2,
    companyName: "Company Name 2",
    description: "Description for Card 2",
    comment: "Comment for Card 2",
    image: "factory_project.png", // Add image URL for Card 2
  },
  // Add more feedback items as needed
];

const FeedbackCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragEndX = useRef(0);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
  };

  const handleDragEnd = () => {
    if (isDragging) {
      const distance = dragEndX.current - dragStartX.current;
      if (distance > 50) {
        // Scroll right (go to the previous card)
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1
        );
      } else if (distance < -50) {
        // Scroll left (go to the next card)
        setCurrentIndex((prevIndex) =>
          prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1
        );
      }
      setIsDragging(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      dragEndX.current = e.clientX;
    }
  };

  return (
    <div className={`${styles.carousel} ${styles.noSelect}`}>
      <div
        className={styles.carouselContent}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onMouseMove={handleMouseMove}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {feedbackData.map((feedback, index) => (
          <div className={styles.feedbackContainer} key={feedback.id}>
            <Feedback
              companyName={feedback.companyName}
              description={feedback.description}
              comment={feedback.comment}
              image={feedback.image}
              customClassName={`card-${index}`} // Pass a custom class name
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackCarousel;
