import { ThemeProvider } from "styled-components";
import AddExpenseForm from "./AddExpense/AddExpenseForm";
import BalanceList from "./BalanceList/BalanceList";
import { StyledHeader } from "./styles/Header.styled";
import Container from "./styles/Container.styled";
import GlobalStyles from "./styles/Global";
import { FlatuicolorsSpain } from "./styles/Theme";
import { BalanceItems } from "./data/BalanceItems";

function App() {
  return (
    <>
      <ThemeProvider theme={FlatuicolorsSpain}>
        <GlobalStyles />
        <Container>
          <StyledHeader>
            <h1>Expense App</h1>
          </StyledHeader>
          <AddExpenseForm />
          <BalanceList items={BalanceItems} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
