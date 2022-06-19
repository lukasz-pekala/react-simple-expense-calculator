import styled from "styled-components";
import { BalanceItemType } from "../models/BalanceItem";

export const StyledBalanceListItem = styled.section<{ type: BalanceItemType }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-left: 5px solid
    ${({ theme, type }) =>
      type === "income"
        ? theme.colors.palmSpringsSplash
        : theme.colors.eyeOfTheNewt};

  div {
    flex: 1;
  }

  .action-icon {
    color: ${({ theme }) => theme.colors.spicedButternut};
    cursor: pointer;
  }

  .action-icon:hover {
    color: ${({ theme }) => theme.colors.mandarinSorbet};
  }
`;
