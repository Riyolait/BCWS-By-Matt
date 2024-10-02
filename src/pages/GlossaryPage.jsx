import React from "react";
import styled from "styled-components";

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
  background: linear-gradient(to right, #00ff00, #00bfff);
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
