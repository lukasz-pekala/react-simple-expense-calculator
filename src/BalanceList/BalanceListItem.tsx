import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CurrencyFormat from "react-currency-format";
import { BalanceItem } from "../models/BalanceItem";

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
      <div>
        <FontAwesomeIcon className="action-icon" icon={faTrash} />
      </div>
    </section>
  );
};

export default BalanceListItem;
