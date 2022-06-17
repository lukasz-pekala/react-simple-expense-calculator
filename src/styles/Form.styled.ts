import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  //   align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 1em;
  border: 1px solid ${({ theme }) => theme.colors.crocodileTooth};
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
