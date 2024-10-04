import React from "react";
import styled from "styled-components";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";
const GlossaryPageContainer = styled.div`
  padding: 2rem;
  color: #333;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
  background: linear-gradient(to bottom, #fff 50%, #ccc 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeInDown 1.5s ease;
`;

const GlossaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  justify-items: center;
  width: 100%;
`;

const GlossaryItem = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: rotate(360deg) scale(1.1);
    box-shadow: 0 0 30px 5px #a7ff5e; /* Ombre verte fluo */
  }
`;

const GlossaryImage = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 0;
`;

const GlossaryTerm = styled.h2`
  font-size: 1.2rem;
  color: #2980b9;
  margin-bottom: 0;
`;

const GlossaryDefinition = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  line-height: 1.2;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const GlossaryPage = () => {
  const terms = [
    {
      term: "Blockchain",
      definition:
        "A decentralized and transparent technology for storing and transmitting information securely.",
      image: "https://cdn-icons-png.flaticon.com/128/2152/2152539.png",
    },
    {
      term: "Cryptocurrency",
      definition:
        "A digital currency that uses cryptography to secure transactions.",
      image: "https://cdn-icons-png.flaticon.com/128/1978/1978485.png",
    },
    {
      term: "Hash",
      definition:
        "A unique code generated from data, used for ensuring data integrity in a blockchain.",
      image: "https://cdn-icons-png.flaticon.com/128/6050/6050858.png",
    },
    {
      term: "Mining",
      definition:
        "The process of validating and adding transactions to the blockchain.",
      image: "https://cdn-icons-png.flaticon.com/128/9850/9850806.png",
    },
    {
      term: "Smart Contract",
      definition:
        "A self-executing contract where the terms are directly written into code, running on a blockchain.",
      image: "https://cdn-icons-png.flaticon.com/128/5901/5901994.png",
    },
    {
      term: "Decentralized Finance (DeFi)",
      definition:
        "A system of financial applications built on blockchain technology that operates without intermediaries.",
      image: "https://cdn-icons-png.flaticon.com/128/5901/5901797.png",
    },
    {
      term: "Public Key",
      definition:
        "A cryptographic key that can be shared with others to receive cryptocurrency.",
      image: "https://cdn-icons-png.flaticon.com/128/4926/4926140.png",
    },
    {
      term: "Private Key",
      definition:
        "A cryptographic key that must be kept secret, used to sign transactions and access your cryptocurrency.",
      image: "https://cdn-icons-png.flaticon.com/128/4926/4926122.png",
    },
  ];

  return (
    <GlossaryPageContainer>
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
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%233c002c&bgColor2=%23314551&brightness=2&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%235606FF&color2=%23FE8989&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=on&lightType=3d&pixelDensity=1.5&positionX=-0.5&positionY=0.1&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.8&uFrequency=5.5&uSpeed=0.1&uStrength=1.4&uTime=0.2&wireframe=false"
          />
        </ShaderGradientCanvas>
      </Background>
      <Title>Cryptocurrency & Blockchain Glossary</Title>
      <GlossaryGrid>
        {terms.map((term, index) => (
          <GlossaryItem key={index}>
            <GlossaryImage src={term.image} alt={term.term} />
            <GlossaryTerm>{term.term}</GlossaryTerm>
            <GlossaryDefinition>{term.definition}</GlossaryDefinition>
          </GlossaryItem>
        ))}
      </GlossaryGrid>
    </GlossaryPageContainer>
  );
};

export default GlossaryPage;
