import styled from "styled-components";
import BalanceListItem from "../BalanceList/BalanceListItem/BalanceListItem";

export const StyledBalanceListItem = styled(BalanceListItem)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  gap: 10px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-left: 5px solid
    ${({ theme, item }) =>
      item.type === "income"
        ? theme.colors.palmSpringsSplash
        : theme.colors.eyeOfTheNewt};

  div {
    flex: 1;
  }
`;
