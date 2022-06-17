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
    border: 1px solid ${({ theme }) => theme.colors.crocodileTooth};
  }

  input.error {
    border: 1px solid ${({ theme }) => theme.colors.fluorescentRed};
  }

  div.error {
    color: ${({ theme }) => theme.colors.fluorescentRed};
  }
`;
