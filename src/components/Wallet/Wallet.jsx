import React from "react";
import styled from "styled-components";

const WalletContainer = styled.div`
  background: linear-gradient(
    135deg,
    #003366,
    #006633
  ); /* Dégradé plus sombre */
  border-radius: 15px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4); /* Ombre plus discrète mais correspondant à la couleur du fond */
  padding: 2rem;
  margin: 1rem;
  width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  color: white;
  margin-bottom: 1rem;
  margin-top: 0.2rem;
`;

const Balance = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: #fff;
  font-weight: bold;
  margin-top: 0.5rem;
`;

const IconContainer = styled.div`
  background: rgba(0, 0, 0, 0.5); /* Fond noir transparent pour l'icône */
  border-radius: 50%;
  padding: 2px;
  width: 36px;
  margin: 0;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;

function Wallet(props) {
  return (
    <WalletContainer>
      {/* Icône Bitcoin */}
      <IconContainer>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
          alt="Bitcoin logo"
          width="30"
          style={{ margin: "4px 0px 0px 3px" }}
        />
      </IconContainer>
      <Title>{props.owner}&apos;s Wallet</Title>
      <Balance>Balance: {props.balance} BTC</Balance>
    </WalletContainer>
  );
}

export default Wallet;
