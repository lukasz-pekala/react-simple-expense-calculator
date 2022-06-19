import { ThemeProvider } from "styled-components";
import AddExpenseForm from "./AddExpense/AddExpenseForm";
import BalanceList from "./BalanceList/BalanceList";
import { StyledHeader } from "./styles/Header.styled";
import Container from "./styles/Container.styled";
import GlobalStyles from "./styles/Global";
import { FlatuicolorsSpain } from "./styles/Theme";
import { BalanceItems } from "./data/BalanceItems";
import { useState } from "react";
import { BalanceItem } from "./models/BalanceItem";
import BalanceSummary from "./BalanceSummary";

function App() {
  const [balanceItems, setBalanceItems] = useState<BalanceItem[]>(BalanceItems);

  const handleBalanceAdded = (balanceItem: BalanceItem) => {
    if (balanceItem.type === "expense" && balanceItem.amount > 0) {
      balanceItem.amount *= -1;
    }

    setBalanceItems([...balanceItems, balanceItem]);
  };

  const handleRemove = (balanceItem: BalanceItem) => {
    setBalanceItems(balanceItems.filter((item) => item.id !== balanceItem.id));
  };

  let totalBalance = balanceItems.reduce((acc, item) => acc + item.amount, 0);

  return (
    <>
      <ThemeProvider theme={FlatuicolorsSpain}>
        <GlobalStyles />
        <Container>
          <StyledHeader>
            <h1>Expense App</h1>
            <BalanceSummary balance={totalBalance} />
          </StyledHeader>
          <AddExpenseForm onBalanceAdded={handleBalanceAdded} />
          <BalanceList items={balanceItems} handleRemove={handleRemove} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
