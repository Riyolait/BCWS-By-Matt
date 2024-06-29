import React from "react";
import styled from "styled-components";

const ChainLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Link = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  background-color: #36d7b7;
  border-radius: 50%;
  box-shadow: 0 0 10px #36d7b7;
  /* Add blink animation */
  animation: blink 1s infinite;
    @keyframes blink {
    0% {
      opacity: 0.5;
    }
`;

const Link2 = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  background-color: #36d7b7;
  border-radius: 50%;
  box-shadow: 0 0 10px #36d7b7;
  /* Add blink animation */
  animation: blink 1s infinite;
  animation-delay: 1.5s;

    @keyframes blink {
    0% {
      opacity: 0.5;
    }
`;
const Link3 = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  background-color: #36d7b7;
  border-radius: 50%;
  box-shadow: 0 0 10px #36d7b7;
  /* Add blink animation */
  animation: blink 1s infinite;
    animation-delay: 1.75s;

    @keyframes blink {
    0% {
      opacity: 0.5;
    }
`;

const ChainLink = () => (
  <ChainLinkContainer className="chainLink">
    <Link />
    <Link2 />
    <Link3 />
  </ChainLinkContainer>
);

export default ChainLink;
