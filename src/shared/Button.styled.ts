import styled from "styled-components";

type ButtonProps = {
  primary: boolean;
};

const Button = styled.button<ButtonProps>`
  cursor: pointer;

  /* Adapt the colors based on primary prop */
  background: ${({ primary, theme }) =>
    primary ? theme.colors.luckyPoint : theme.colors.eyeOfTheNewt};
  color: white;

  font-size: 1em;
  min-width: 10em;
  margin: 0;
  padding: 0.75em 1.5em;
  border: 2px solid;
  border-radius: 3px;

  &:hover {
    background: ${({ primary, theme }) =>
      primary ? theme.colors.jacksonsPurple : theme.colors.fluorescentRed};
  }
`;

export default Button;
