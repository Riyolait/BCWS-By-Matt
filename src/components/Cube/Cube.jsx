import React from "react";
import "./Cube.scss";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    placement="bottom"
    PopperProps={{
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, -158], // Change [0, 8] to your desired offset [skidding, distance]. For example, [0, 8] adds 8px of distance below the element.
          },
        },
      ],
    }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(0, 0, 0, 0.90)",
    color: "white",
    maxWidth: 300,
    fontSize: theme.typography.pxToRem(18),
    border: "1px solid #dadde9",
  },
}));
function Cube(props) {
  const isSelected = props.isSelected;

  return (
    <div
      className={`container ${isSelected ? "selected" : ""}`}
      onClick={() => props.onBlockClick(props.index)}
    >
      <HtmlTooltip
        title={
          <React.Fragment>
            <div>
              {"Index : "}
              {props.index} <br />
              {"Data : "}
              {props.data1} {props.data2}
              <br />
              {"Previous Hash : "}
              {props.previousHash}
              <br />
              {"Hash : "}
              {props.hash}
            </div>
          </React.Fragment>
        }
      >
        <div className="scene">
          <div className={`webpack-cube ${isSelected ? "selected" : ""}`}>
            <div className="outer-cube">
              <div className="face face-top"></div>
              <div className="face face-bottom"></div>
              <div className="face face-left">
                <p className="face-text">Index: {props.index}</p>
                <p className="face-text">Data: {props.data1}</p>
                <p className="face-text">{props.data2}</p>
                <p className="face-text">Previous Hash: {props.previousHash}</p>
                <p className="face-text">Hash: {props.hash}</p>
              </div>
              <div className="face face-right"></div>
              <div className="face face-front"></div>
              <div className="face face-back"></div>
            </div>
          </div>
          <div className="shadows-outer-container">
            <div
              className={`shadow-outer ${isSelected ? "selected" : ""}`}
            ></div>
          </div>
        </div>
      </HtmlTooltip>
    </div>
  );
}

export default Cube;
