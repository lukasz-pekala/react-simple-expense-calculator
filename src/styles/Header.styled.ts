import styled from "styled-components";

export const StyledHeader = styled.header`
  font-family: "Tenor Sans", sans-serif;
  background-color: "#ffda79";
  width: 100%;
  padding-bottom: 1em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.spicedButternut};
  margin-bottom: 10px;
`;
