import React from "react";
import styled from "styled-components";

const WalletContainer = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  width: 300px;
`;

const Title = styled.h2`
  text-align: center;
`;

const Balance = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

function Wallet(props) {
  return (
    <WalletContainer>
      <Title>Portefeuille de {props.owner}</Title>
      <Balance>Solde : {props.balance} BTC</Balance>
    </WalletContainer>
  );
}

export default Wallet;
