import styled from "styled-components";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

import TwitterCarousel from "../components/TwitterCarousel/TwitterCarousel";


// Styles pour rendre la page plus attrayante
const Container = styled.div`
  text-align: center;
  padding: 5rem 2rem;
  color: white;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: fadeIn 2s ease-in-out;
  background: linear-gradient(to bottom, #fff 50%, #ccc 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.8;
  animation: slideUp 2s ease-in-out;

  @keyframes slideUp {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const CallToAction = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #36d7b7;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  transition: scale 0.3s ease;

  &:hover {
    background-color: #2bb39e;
    scale: 1.05;
  }
`;

const FeatureSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 4rem;
  text-align: center;
`;

const Feature = styled.div`
  width: 30%;
  animation: zoomIn 1s ease;

  @keyframes zoomIn {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  img {
    width: 100px;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #ddd;
  }

  transition: transform 0.9s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const NewsSection = styled.div`
  margin-top: 3rem;
  width: 100%;
  padding: 2rem 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  `;

const NewsTitle = styled.h2`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    width: 60%;
    height: 3px;
    background: #5606FF;
    bottom: -10px;
    left: 20%;
    border-radius: 5px;
  }
`;

const TwitterEmbedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  padding: 1rem;
`;
const TwitterEmbed = styled.div`
  width: 30vw;
  height: 800px;
  background-color: #333;
  border-radius: 10px;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

function HomePage() {
  return (
    <Container>
      <Background>
        <ShaderGradientCanvas
          importedfiber={{ ...fiber, ...drei, ...reactSpring }}
          style={{
            position: "absolute",
            top: 0,
          }}
        >
          <ShaderGradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%233c002c&bgColor2=%23314551&brightness=0.5&cAzimuthAngle=0&cDistance=3.9&cPolarAngle=115&cameraZoom=30&color1=%235606FF&color2=%23FE8989&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=on&lightType=3d&pixelDensity=1.5&positionX=-0.5&positionY=0.1&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=00&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.8&uFrequency=5.5&uSpeed=0.1&uStrength=1.4&uTime=0.2&wireframe=false"
          />
        </ShaderGradientCanvas>
      </Background>

      <Title>Welcome to Blockchain Simulator</Title>
      <Description>
        Explore the world of blockchain by simulating transactions and watching
        blocks being created in real-time!
      </Description>
      <CallToAction onClick={() => (window.location.href = "/simulator")}>
        Start Simulating
      </CallToAction>

      {/* Section des fonctionnalités */}
      <FeatureSection>
        <Feature>
          <img
            src="https://img.icons8.com/ios/100/ffffff/blockchain-technology.png"
            alt="Blockchain Icon"
          />
          <h3>Visualize the Blockchain</h3>
          <p>
            See how transactions are processed and blocks are added to the chain
            in a real-world simulation.
          </p>
        </Feature>

        <Feature>
          <img
            src="https://img.icons8.com/ios/100/ffffff/network.png"
            alt="Network Icon"
          />
          <h3>Simulate Peer-to-Peer Network</h3>
          <p>
            Understand the decentralized nature of blockchain by simulating
            nodes and communication between them.
          </p>
        </Feature>

        <Feature>
          <img
            src="https://img.icons8.com/ios/100/ffffff/lock.png"
            alt="Security Icon"
          />
          <h3>Learn About Security</h3>
          <p>
            Discover how cryptographic hashes and decentralized consensus ensure
            the security of the blockchain.
          </p>
        </Feature>
      </FeatureSection>
      <hr></hr>
      <hr />

      <NewsSection>
        <NewsTitle>Latest Crypto & Blockchain News</NewsTitle>
        <TwitterCarousel />
      </NewsSection>

    </Container>
  );
}

export default HomePage;
