import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";
import CurrencyFormat from "react-currency-format";
import { BalanceItem } from "../models/BalanceItem";
import { StyledBalanceListItem } from "../styles/BalanceListItem.styled";

type BalanceListItemProps = {
  item: BalanceItem;
  className?: string;
  handleRemove: (item: BalanceItem) => void;
};

const BalanceListItem = ({
  item,
  className,
  handleRemove,
}: BalanceListItemProps) => {
  const handleRemoveClick: MouseEventHandler<SVGSVGElement> = () => {
    handleRemove(item);
  };

  return (
    <StyledBalanceListItem type={item.type} className={className}>
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
        <FontAwesomeIcon
          className="action-icon"
          icon={faTrash}
          onClick={handleRemoveClick}
        />
      </div>
    </StyledBalanceListItem>
  );
};

export default BalanceListItem;
