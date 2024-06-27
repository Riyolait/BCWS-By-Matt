import React from "react";
import "./Cube.scss";

function Cube(props) {
  return (
    <div className="container">
      <div className="scene">
        <div className="webpack-cube">
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
          <div className="shadow-outer"></div>
        </div>
      </div>
    </div>
  );
}

export default Cube;
