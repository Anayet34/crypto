import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import logo5 from './image/logo.png';
import './hero.css';

const HeroSection = () => {
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [typewriterText, setTypewriterText] = useState('');
  const text = "The Cereal Guy coin is based on the famous Cereal";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTypewriterText(text.substring(0, currentIndex));
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (text.length + 1)); // Reset to 0 when it reaches the end
    }, 100); // Typing speed in milliseconds

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, text]);

  const contentAnimation = useSpring({
    opacity: contentInView ? 1 : 0,
    transform: contentInView ? 'translateX(0)' : 'translateX(-50%)',
  });

  const imageAnimation = useSpring({
    opacity: imageInView ? 1 : 0,
    transform: imageInView ? 'translateX(0)' : 'translateX(50%)',
  });

  return (
    <section className={`hero-section ${contentInView ? 'hero-section-visible' : ''}`}>
      <animated.div className="hero-content" style={contentAnimation} ref={contentRef}>
        <div className="hero-text">
          <h1> {typewriterText} <br />Guy internet meme that emerged in 2007</h1>
          <p>Cereal Guy is the most memeable memecoin in existence.</p>
          <p>It’s time for the Cereal Guy to take their reign as king of the memes.</p>
          <p> Cereal Guy is here to make memecoins great again.</p>
        </div>
        <div className="hero-buttons">
          <button className="btn1">BUY Cereal Guy</button>
        </div>
      </animated.div>
      <animated.div className="hero-image" style={imageAnimation} ref={imageRef}>
        <img src={logo5} alt="Cereal Guy" />
      </animated.div>
    </section>
  );
};

export default HeroSection;
