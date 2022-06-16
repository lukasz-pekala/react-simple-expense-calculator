import { BalanceItem } from "../models/BalanceItem";
import CurrencyFormat from "react-currency-format";

type BalanceListItemProps = {
  item: BalanceItem;
  className?: string;
};

const BalanceListItem = ({ item, className }: BalanceListItemProps) => {
  return (
    <section className={className}>
      <div>{item.name}</div>
      <div>
        <CurrencyFormat
          value={item.amount}
          displayType={"text"}
          thousandSeparator=" "
          suffix={" zł"}
        />
      </div>
      <div>{item.type}</div>
      <div>{item.category}</div>
    </section>
  );
};

export default BalanceListItem;
