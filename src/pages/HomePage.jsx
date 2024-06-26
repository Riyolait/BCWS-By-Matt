// import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const HomePage = () => {
  return (
    <Container>
      <Title>Bienvenue dans le monde de la Blockchain</Title>
      <p>
        Explorez et apprenez à travers des simulations et des jeux interactifs.
      </p>
    </Container>
  );
};

export default HomePage;
