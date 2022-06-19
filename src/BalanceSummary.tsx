import CurrencyFormat from "react-currency-format";
import { StyledBalanceSummary } from "./styles/BalanceSummary.styled";

export type BalanceSummaryProps = {
  balance: number;
};

const BalanceSummary = ({ balance }: BalanceSummaryProps) => {
  console.log(balance > 0);
  return (
    <>
      <span>Saldo: </span>
      <StyledBalanceSummary balance={balance}>
        <CurrencyFormat
          value={balance}
          displayType={"text"}
          thousandSeparator=" "
          suffix={" zł"}
          decimalSeparator=","
        />
      </StyledBalanceSummary>
    </>
  );
};

export default BalanceSummary;
