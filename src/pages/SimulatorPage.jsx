import { useState } from "react";
import styled from "styled-components";
import Wallet from "../components/Wallet/Wallet.jsx";
import BlockchainSimulator from "../components/BlockchainSimulator/BlockchainSimulator.jsx";
// import Cube from "../components/Cube/Cube.jsx";
import "../styles/GlobalStyles.css";
import "../styles/SimulatorPage.css";

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const WalletsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`;

const SimulatorPage = () => {
  const [aliceBalance, setAliceBalance] = useState(3);
  const [bobBalance, setBobBalance] = useState(0);
  const [blocks, setBlocks] = useState([
    {
      index: 0,
      data1: "Genesis Block",
      data2: "",
      previousHash: "0",
      hash: "hash0",
    },
  ]);

  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("AliceToBob");

  const addTransaction = (sender, receiver, amount) => {
    const lastBlock = blocks[blocks.length - 1];
    const newIndex = lastBlock.index + 1;
    const newBlock = {
      index: newIndex,
      data1: `${sender} envoie ${amount} BTC`,
      data2: `à ${receiver}`,
      previousHash: lastBlock.hash,
      hash: `hash${newIndex}`,
    };
    setBlocks([...blocks, newBlock]);
  };

  const handleTransfer = (e) => {
    e.preventDefault();
    const transferAmount = parseFloat(amount);
    let sender, receiver;

    if (transactionType === "AliceToBob") {
      sender = "Alice";
      receiver = "Bob";
      if (aliceBalance >= transferAmount) {
        setAliceBalance(aliceBalance - transferAmount);
        setBobBalance(bobBalance + transferAmount);
        addTransaction(sender, receiver, transferAmount);
      } else {
        alert("Solde insuffisant pour cette transaction");
      }
    } else if (transactionType === "BobToAlice") {
      sender = "Bob";
      receiver = "Alice";
      if (bobBalance >= transferAmount) {
        setBobBalance(bobBalance - transferAmount);
        setAliceBalance(aliceBalance + transferAmount);
        addTransaction(sender, receiver, transferAmount);
      } else {
        alert("Solde insuffisant pour cette transaction");
      }
    }

    // Reset form fields
    setAmount("");
  };

  return (
    <Container>
      <Title>Simulateur de Blockchain Bitcoin</Title>
      <WalletsContainer>
        <Wallet owner="Alice" balance={aliceBalance} />
        <Wallet owner="Bob" balance={bobBalance} />
      </WalletsContainer>
      <FormContainer>
        <h3>Transférer des BTC</h3>
        <Form onSubmit={handleTransfer}>
          <label>
            Montant :
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0.01"
              step="0.01"
              required
            />
          </label>
          <label>
            Transfert :
            <select
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
            >
              <option value="AliceToBob">De Alice à Bob</option>
              <option value="BobToAlice">De Bob à Alice</option>
            </select>
          </label>
          <Button type="submit">Envoyer</Button>
        </Form>
      </FormContainer>
      <div className="cubesContainer">
        <BlockchainSimulator blocks={blocks} />
      </div>
    </Container>
  );
};

export default SimulatorPage;
