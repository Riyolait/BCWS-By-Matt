import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExchangeAlt, FaBitcoin } from 'react-icons/fa';

const FormContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Title = styled(motion.h3)`
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled(motion.div)`
  position: relative;
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #5606FF;
    box-shadow: 0 0 0 2px rgba(86, 6, 255, 0.2);
  }
`;

const Label = styled(motion.label)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
  pointer-events: none;
  transition: all 0.3s ease;

  ${Input}:focus + &,
  ${Input}:not(:placeholder-shown) + & {
    top: 0;
    font-size: 0.8rem;
    background: #1a1a2e;
    padding: 0 0.5rem;
  }
`;

const Select = styled(motion.select)`
  width: 100%;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #5606FF;
    box-shadow: 0 0 0 2px rgba(86, 6, 255, 0.2);
  }
`;

const Button = styled(motion.button)`
  padding: 1rem;
  background: linear-gradient(45deg, #5606FF, #FF8989);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(86, 6, 255, 0.4);
  }
`;

const TransferForm = () => {
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('AliceToBob');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Transfer submitted:', { amount, transactionType });
  };

  return (
    <FormContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Transfer BTC
      </Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="number"
            id="amount"
            placeholder=" "
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="0.01"
            step="0.01"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
          <Label htmlFor="amount">Amount (BTC)</Label>
        </InputGroup>
        <InputGroup>
          <Select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <option value="AliceToBob">From Alice to Bob</option>
            <option value="BobToAlice">From Bob to Alice</option>
          </Select>
        </InputGroup>
        <Button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <FaExchangeAlt /> Transfer <FaBitcoin />
        </Button>
      </Form>
    </FormContainer>
  );
};

export default TransferForm;