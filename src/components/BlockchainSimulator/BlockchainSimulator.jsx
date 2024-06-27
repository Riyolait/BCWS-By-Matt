import React from "react";
// import styled from "styled-components";
import Cube from "../Cube/Cube.jsx";
// import "../../styles/GlobalStyles.css";

// const Container = styled.div`
//   padding: 2rem;
// `;

// const Block = styled.div`
//   margin: auto;
//   background-color: #f2f2f2;
// `;

const BlockchainSimulator = (props) => {
  return (
    <>
      {props.blocks.map((block) => (
        <div key={block.index}>
          <Cube
            index={block.index}
            data1={block.data1}
            data2={block.data2}
            previousHash={block.previousHash}
            hash={block.hash}
          />
        </div>
      ))}
    </>
  );
};

export default BlockchainSimulator;
