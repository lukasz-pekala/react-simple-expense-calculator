import styled from "styled-components";
// background: ${props => props.primary ? "palevioletred" : "white"};
// color: ${props => props.primary ? "white" : "palevioletred"};

type ButtonProps = {
  primary: boolean;
};

const Button = styled.button<ButtonProps>`
  /* Adapt the colors based on primary prop */
  background: ${({ primary }) => (primary ? "#2c2c54" : "#b33939")};
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1.25em;
  border: 2px solid;
  border-radius: 3px;

  &:hover {
    background: ${({ primary }) => (primary ? "#40407a" : "#ff5252")};
  }
`;

export default Button;
