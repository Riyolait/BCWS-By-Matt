import React from "react";
import Cube from "../Cube/Cube.jsx";
import ChainLink from "../ChainLink/ChainLink.jsx";
import SpecialChainLink from "../ChainLink/SpecialChainLink.jsx";

// Helper function to group blocks into rows
const groupBlocksByRows = (blocks, blocksPerRow) => {
  const rows = [];
  for (let i = 0; i < blocks.length; i += blocksPerRow) {
    rows.push(blocks.slice(i, i + blocksPerRow));
  }
  return rows;
};

const BlockchainSimulator = (props) => {
  const blocksPerRow = 3;
  const rows = groupBlocksByRows(props.blocks, blocksPerRow);

  return (
    <>
      {rows.map((row, rowIndex) => {
        // Reverse row if it's an even-indexed row (0-based index)
        const processedRow = rowIndex % 2 === 1 ? row.reverse() : row;

        return processedRow.map((block, index) => (
          <React.Fragment key={block.index}>
            <Cube
              index={block.index}
              data1={block.data1}
              data2={block.data2}
              previousHash={block.previousHash}
              hash={block.hash}
            />
            {/* Add ChainLink only between the first and second block of each row */}
            {(index % blocksPerRow === 0 || index % blocksPerRow === 1) &&
              index < processedRow.length - 1 && <ChainLink />}
            {/* Add a special chain between last block of a row and first block of the next row */}
            {index % 3 === 2 && index < props.blocks.length - 1 && (
              <SpecialChainLink />
            )}
          </React.Fragment>
        ));
      })}
    </>
  );
};

export default BlockchainSimulator;
