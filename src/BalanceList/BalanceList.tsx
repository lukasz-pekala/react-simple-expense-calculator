import { BalanceItem } from "../models/BalanceItem";
import BalanceListItem from "./BalanceListItem";

type BalanceListProps = {
  items: BalanceItem[];
  handleRemove: (item: BalanceItem) => void;
};

const BalanceList = ({ items, handleRemove }: BalanceListProps) => {
  return (
    <div>
      <h2>Earnings and expenses</h2>
      {items.map((item) => (
        <BalanceListItem
          key={item.id}
          item={item}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default BalanceList;
