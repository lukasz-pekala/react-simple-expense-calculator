import styled from "styled-components";
import { BalanceSummaryProps } from "../BalanceSummary";

export const StyledBalanceSummary = styled.span<BalanceSummaryProps>`
  // background-color: #ffda79;
  font-size: 1.5em;
  color: ${(props: any) =>
    props.balance > 0
      ? props.theme.colors.palmSpringsSplash
      : props.theme.colors.eyeOfTheNewt};
`;
