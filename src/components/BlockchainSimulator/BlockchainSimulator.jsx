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
        const processedRow = rowIndex % 2 === 1 ? row.reverse() : row;

        return (
          <div
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            key={rowIndex}
          >
            {processedRow.map((block, index) => (
              <React.Fragment key={block.index}>
                <Cube
                  index={block.index}
                  data1={block.data1}
                  data2={block.data2}
                  previousHash={block.previousHash}
                  hash={block.hash}
                />
                {/* Add ChainLink between blocks in a row */}
                {index < processedRow.length - 1 && <ChainLink />}
              </React.Fragment>
            ))}
            {/* Add a SpecialChainLink between the last block of the current row and the first of the next */}
            {rowIndex < rows.length - 1 && <SpecialChainLink />}
          </div>
        );
      })}
    </>
  );
};

export default BlockchainSimulator;
