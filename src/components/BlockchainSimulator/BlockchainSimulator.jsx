import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
`;

const Block = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
`;

const BlockchainSimulator = () => {
  const [blocks, setBlocks] = useState([
    { index: 0, data: "Genesis Block", previousHash: "0", hash: "hash0" },
  ]);

  const addBlock = () => {
    const lastBlock = blocks[blocks.length - 1];
    const newIndex = lastBlock.index + 1;
    const newBlock = {
      index: newIndex,
      data: `Block ${newIndex}`,
      previousHash: lastBlock.hash,
      hash: `hash${newIndex}`,
    };
    setBlocks([...blocks, newBlock]);
  };

  return (
    <Container>
      <h2>Simulateur de Blockchain</h2>
      {blocks.map((block) => (
        <Block key={block.index}>
          <p>Index: {block.index}</p>
          <p>Data: {block.data}</p>
          <p>Previous Hash: {block.previousHash}</p>
          <p>Hash: {block.hash}</p>
        </Block>
      ))}
      <button onClick={addBlock}>Ajouter un Block</button>
    </Container>
  );
};

export default BlockchainSimulator;
