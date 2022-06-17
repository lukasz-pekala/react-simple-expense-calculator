import { DefaultTheme, ThemeProvider } from "styled-components";
import AddExpenseForm from "./AddExpense/AddExpenseForm";
import BalanceList from "./BalanceList/BalanceList";
import { BalanceItem } from "./models/BalanceItem";
import { StyledHeader } from "./styles/Header.styled";
import Container from "./styles/Container.styled";
import GlobalStyles from "./styles/Global";

const balanceItems: BalanceItem[] = [
  {
    id: 1,
    name: "Rent",
    amount: 1000,
    type: "expense",
    category: "Home",
  },
  {
    id: 2,
    name: "Coffee",
    amount: 2,
    type: "expense",
    category: "Food",
  },
  {
    id: 3,
    name: "Gas",
    amount: 100,
    type: "expense",
    category: "Transport",
  },
  {
    id: 4,
    name: "Burrito",
    amount: 10,
    type: "expense",
    category: "Food",
  },
  {
    id: 5,
    name: "Salary",
    amount: 10000,
    type: "income",
    category: "Work",
  },
];

const theme = {
  colors: {
    palmSpringsSplash: "#218c74",
    eyeOfTheNewt: "#b33939",
  },
} as DefaultTheme;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <StyledHeader>
            <h1>Expense App</h1>
          </StyledHeader>
          <AddExpenseForm />
          <BalanceList items={balanceItems} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
