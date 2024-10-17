import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaBitcoin, FaChevronDown, FaChevronUp } from "react-icons/fa";

const WalletContainer = styled(motion.div)`
  background: linear-gradient(135deg, #1a237e, #283593);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  margin: 1rem;
  width: 350px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin: 0;
`;

const IconContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
`;

const Balance = styled(motion.p)`
  font-size: 2.5rem;
  color: #fff;
  font-weight: bold;
  margin: 1rem 0;
  text-align: center;
`;

const BalanceChange = styled(motion.span)`
  font-size: 1rem;
  color: ${props => props.positive ? '#4caf50' : '#f44336'};
  display: block;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const Button = styled(motion.button)`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const TransactionHistory = styled(motion.div)`
  margin-top: 1.5rem;
`;

const Transaction = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TransactionAmount = styled.span`
  color: ${props => props.type === 'receive' ? '#4caf50' : '#f44336'};
  font-weight: bold;
`;

function Wallet({ owner, balance }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setShowTransactions(false);
  };

  const containerVariants = {
    collapsed: { height: 'auto' },
    expanded: { height: 'auto', transition: { duration: 0.3 } }
  };

  const iconVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 }
  };

  const balanceChangeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const transactionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } }
  };

  return (
    <WalletContainer
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={containerVariants}
    >
      <Header>
        <Title>{owner}'s Wallet</Title>
        <IconContainer
          onClick={toggleExpand}
          variants={iconVariants}
          animate={isExpanded ? "expanded" : "collapsed"}
        >
          <FaBitcoin size={24} color="white" />
        </IconContainer>
      </Header>
      <Balance
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {balance} BTC
      </Balance>
      <AnimatePresence>
        {isExpanded && (
          <BalanceChange
            positive={true}
            variants={balanceChangeVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            +2.5% (24h)
          </BalanceChange>
        )}
      </AnimatePresence>
      {isExpanded && (
        <ButtonContainer>
          <Button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Send
          </Button>
          <Button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Receive
          </Button>
          <Button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setShowTransactions(!showTransactions)}
          >
            {showTransactions ? <FaChevronUp /> : <FaChevronDown />}
          </Button>
        </ButtonContainer>
      )}
      <AnimatePresence>
        {showTransactions && (
          <TransactionHistory
            variants={transactionVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Transaction>
              <span>Received from Alice</span>
              <TransactionAmount type="receive">+0.05 BTC</TransactionAmount>
            </Transaction>
            <Transaction>
              <span>Sent to Bob</span>
              <TransactionAmount type="send">-0.02 BTC</TransactionAmount>
            </Transaction>
          </TransactionHistory>
        )}
      </AnimatePresence>
    </WalletContainer>
  );
}

export default Wallet;