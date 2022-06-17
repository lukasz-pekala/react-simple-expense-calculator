import styled from "styled-components";

export const StyledGenericInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 1em;

  input,
  select {
    font-size: 1em;
    padding: 0.5em;
    border: 1px solid #d1ccc0;
  }

  input.error {
    border: 1px solid #ff5252;
  }

  div.error {
    color: #ff5252;
  }
`;
