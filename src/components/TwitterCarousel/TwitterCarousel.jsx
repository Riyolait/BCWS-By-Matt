// src/components/TwitterCarousel/TwitterCarousel.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

const TimelinesContainer = styled.div`
  display: flex;
  width: 100%;
//   width: ${(props) => props.length * 100}%;
  transition: transform 0.5s ease;
  transform: translateX(calc(${(props) => -props.current * 100}% + ${(props) => -props.current * 10}rem));
  scale: 0.9;
  gap: 10rem;
`;

const TimelineWrapper = styled.div`
  width: 100%;
  height: 800px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.005);
  width: 50px;
  border: none;
  color: #fff;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  border-radius: 10px;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 0;
`;

const NextButton = styled(NavigationButton)`
  right: 0;
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

const Indicator = styled(motion.div)`
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  cursor: pointer;

  &.active {
    background: #5606FF;
  }
`;

const TwitterCarousel = () => {
  const [current, setCurrent] = useState(0);
  const twitterFeeds = [
    {
      id: 1,
      screenName: 'cryptofeednews',
      title: 'CryptoFeed News',
    },
    {
      id: 2,
      screenName: 'CryptoBoomNews',
      title: 'CryptoBoom News',
    },
    {
      id: 3,
      screenName: 'cryptodotnew',
      title: 'CryptoDot News',
    },
  ];

  const nextSlide = () => {
    setCurrent(current === twitterFeeds.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? twitterFeeds.length - 1 : current - 1);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <CarouselContainer>
      <PrevButton onClick={prevSlide}>
        <FaChevronLeft />
      </PrevButton>
      <NextButton onClick={nextSlide}>
        <FaChevronRight />
      </NextButton>
      
      <TimelinesContainer length={twitterFeeds.length} current={current}>
        {twitterFeeds.map((feed) => (
          <TimelineWrapper key={feed.id}>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={feed.screenName}
              options={{ height: 800, width: '100%' }}
              theme="dark"
              noHeader
              noBorders
              noFooter
              transparent
            />
          </TimelineWrapper>
        ))}
      </TimelinesContainer>
      
      <Indicators>
        {twitterFeeds.map((feed, index) => (
          <Indicator
            key={feed.id}
            onClick={() => goToSlide(index)}
            className={current === index ? 'active' : ''}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </Indicators>
    </CarouselContainer>
  );
};

export default TwitterCarousel;
