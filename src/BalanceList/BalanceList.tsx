import { BalanceItem } from "../models/BalanceItem";
import { StyledBalanceListItem } from "../styles/BalanceListItem.styled";

type BalanceListProps = {
  items: BalanceItem[];
};

const BalanceList = ({ items }: BalanceListProps) => {
  return (
    <div>
      <h2>Earnings and expenses</h2>
      {items.map((item) => (
        <StyledBalanceListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default BalanceList;
