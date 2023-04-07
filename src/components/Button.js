import React from "react";
import styled from "styled-components";

function Button({ title }) {
  return <MyButton>{title}</MyButton>;
}

export default Button;

export const MyButton = styled.button`
  background: var(--activeColor);
  outline: unset;
  height: 4rem;
  border: unset;
  font-size: 1.4rem;
  cursor: pointer;
  padding: 0 2rem;
  font-weight: bold;
  border-radius: 0.5rem;
`;
