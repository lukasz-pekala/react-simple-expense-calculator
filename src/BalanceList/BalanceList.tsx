import { StyledBalanceListItem } from "../styles/BalanceListItem.Styled";
import { BalanceItem } from "./models/BalanceItem";

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
