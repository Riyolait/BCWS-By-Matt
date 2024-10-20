import { useState, useEffect } from "react";
import styled from "styled-components";
import Wallet from "../components/Wallet/Wallet.jsx";
import BlockchainSimulator from "../components/BlockchainSimulator/BlockchainSimulator.jsx";
import "../styles/GlobalStyles.css";
import "../styles/SimulatorPage.css";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

const Container = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-areas:
    "title title title"
    "wallet form form"
    "wallet cubes cubes";
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  grid-area: title;
  font-size: 3rem;
  background: linear-gradient(to bottom, #fff 50%, #ccc 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const WalletsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 2rem;
  grid-area: wallet;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  grid-area: form;
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

const CubesContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-area: cubes;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const saveSession = async (blocks) => {
  const response = await fetch("http://localhost:5000/api/sessions/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sessionId: "unique-session-id",
      blocks: blocks,
    }),
  });
  const data = await response.json();
  console.log(data);
};

const loadSession = async () => {
  const response = await fetch(
    "http://localhost:5000/api/sessions/unique-session-id"
  );
  const data = await response.json();
  return data.blocks;
};

const SimulatorPage = () => {
  const [aliceBalance, setAliceBalance] = useState(0);
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
  const [selectedBlockIndex, setSelectedBlockIndex] = useState(null);

  // Function to handle click on the CubesContainer
  const handleBlockClick = (blockIndex) => {
    // console.log(`Block ${blockIndex} clicked!`);
    // alert(`Block ${blockIndex} was clicked!`);
    setSelectedBlockIndex(blockIndex);
    // alert the state of the selected block
  };

  // Charger la session une seule fois
  useEffect(() => {
    const fetchSession = async () => {
      const savedBlocks = await loadSession();
      if (savedBlocks) {
        setBlocks(savedBlocks);
      }
    };
    fetchSession();
  }, []);

  // Calcul des balances en fonction de la blockchain
  useEffect(() => {
    const calculateBalances = () => {
      let alice = 3;
      let bob = 3;

      blocks.forEach((block) => {
        if (block.data1.includes("Alice send")) {
          const amount = parseFloat(block.data2.split(" ")[0]);
          alice -= amount;
          bob += amount;
        } else if (block.data1.includes("Bob send")) {
          const amount = parseFloat(block.data2.split(" ")[0]);
          bob -= amount;
          alice += amount;
        }
      });

      setAliceBalance(alice);
      setBobBalance(bob);
    };

    calculateBalances();
  }, [blocks]);

  const addTransaction = (sender, receiver, amount) => {
    const lastBlock = blocks[blocks.length - 1];
    const newIndex = lastBlock.index + 1;
    const newBlock = {
      index: newIndex,
      data1: `${sender} send`,
      data2: `${amount} BTC to ${receiver}`,
      previousHash: lastBlock.hash,
      hash: `hash${newIndex}`,
    };

    // Met à jour les blocs avec le nouveau bloc et sauvegarde la session
    setBlocks((prevBlocks) => {
      const updatedBlocks = [...prevBlocks, newBlock];
      saveSession(updatedBlocks); // Sauvegarde après l'ajout du bloc
      return updatedBlocks;
    });
  };

  const handleTransfer = (e) => {
    e.preventDefault();
    const transferAmount = parseFloat(amount);
    let sender, receiver;

    if (transactionType === "AliceToBob") {
      sender = "Alice";
      receiver = "Bob";
      if (aliceBalance >= transferAmount) {
        addTransaction(sender, receiver, transferAmount);
      } else {
        alert("Insufficient balance for this transaction");
      }
    } else if (transactionType === "BobToAlice") {
      sender = "Bob";
      receiver = "Alice";
      if (bobBalance >= transferAmount) {
        addTransaction(sender, receiver, transferAmount);
      } else {
        alert("Insufficient balance for this transaction");
      }
    }

    // Reset form fields
    setAmount("");
  };

  const chunkBlocks = (blocks, chunkSize) => {
    let result = [];
    for (let i = 0; i < blocks.length; i += chunkSize) {
      result.push(blocks.slice(i, i + chunkSize));
    }
    return result;
  };

  const blocksChunks = chunkBlocks(blocks, 3);

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
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%233c002c&bgColor2=%23314551&brightness=0.5&cAzimuthAngle=0&cDistance=3.9&cPolarAngle=115&cameraZoom=30&color1=%235606FF&color2=%23FE8989&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=on&lightType=3d&pixelDensity=1.5&positionX=-0.5&positionY=0.1&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=00&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.8&uFrequency=5.5&uSpeed=0.1&uStrength=1.4&uTime=0.2&wireframe=false"          />
        </ShaderGradientCanvas>
      </Background>
      <Title>Bitcoin Blockchain Simulator</Title>
      <WalletsContainer>
        <Wallet owner="Alice" balance={aliceBalance} />
        <Wallet owner="Bob" balance={bobBalance} />
      </WalletsContainer>
      <FormContainer>
        <h3>Transfer BTC</h3>
        <Form onSubmit={handleTransfer}>
          <label>
            Amount :
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
            Transfer :
            <select
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
            >
              <option value="AliceToBob">From Alice to Bob</option>
              <option value="BobToAlice">From Bob to Alice</option>
            </select>
          </label>
          <Button type="submit">Send</Button>
        </Form>
      </FormContainer>
      <CubesContainer>
        {blocksChunks.map((chunk, index) => (
          <BlockchainSimulator
            key={index}
            blocks={chunk}
            onBlockClick={handleBlockClick}
            selectedBlockIndex={selectedBlockIndex}
          />
        ))}
      </CubesContainer>
    </Container>
  );
};

export default SimulatorPage;
