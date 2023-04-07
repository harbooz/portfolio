import React from "react";
import styled from "styled-components";

function ProgressBar({ title, procentage, filled }) {
  return (
    <ProgressWrapper>
      <div className="top__header">
        <span>{title}</span>
        <span>{procentage}%</span>
      </div>
      <div className="progressBar">
        <span style={{ width: `${filled}%` }}></span>
      </div>
    </ProgressWrapper>
  );
}

export default ProgressBar;
const ProgressWrapper = styled.div`
  width: 45%;
  margin-bottom: 3rem;

  &:nth-child(odd) {
    margin-right: 5%;
  }
  .top__header {
    display: flex;
    justify-content: space-between;
  }

  .progressBar {
    height: 6px;
    width: 100%;
    background: gray;
    border-radius: 10px;

    span {
      background: var(--activeColor);
      display: flex;
      height: 100%;
      border-radius: 10px;
    }
  }
`;
