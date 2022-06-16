import { StyledBalanceListItem } from "../styles/BalanceListItem.Styled";
import { BalanceItem } from "./models/BalanceItem";

type BalanceListProps = {
  items: BalanceItem[];
};

const BalanceList = ({ items }: BalanceListProps) => {
  return (
    <div>
      <h1>Earnings and expenses</h1>
      {items.map((item) => (
        <StyledBalanceListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default BalanceList;
