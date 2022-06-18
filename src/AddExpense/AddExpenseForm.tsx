import Button from "../shared/Button";
import { Field, Formik } from "formik";
import * as Yup from "yup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledForm } from "../styles/Form.styled";

import {
  BalanceItem,
  BalanceItemCategory,
  BalanceItemType,
} from "../models/BalanceItem";
import { GenericInput } from "../shared/GenericInput";
import { StyledGenericInput } from "../styles/GenericInput.styled";
import SwitchableRadioGroup from "../styles/SwitchableRadioGroup";

const categories: BalanceItemCategory[] = [
  "Transport",
  "Financial",
  "Food",
  "Health",
  "Home",
  "Other",
  "Work",
];

type AddExpenseFormProps = {
  onBalanceAdded: (balanceItem: BalanceItem) => void;
};

const AddExpenseForm = ({ onBalanceAdded }: AddExpenseFormProps) => {
  return (
    <>
      <h2>Add new transaction</h2>
      <Formik
        initialValues={{ name: "", amount: "", type: "expense", category: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          amount: Yup.number().required("Amount is required"),
          type: Yup.string().oneOf(["expense", "income"]),
          category: Yup.string().oneOf(categories),
        })}
        onSubmit={(values) => {
          onBalanceAdded({
            id: Math.random() * 1000,
            name: values.name,
            amount: +values.amount,
            type: values.type as BalanceItemType,
            category: values.category as BalanceItemCategory,
          });
        }}
      >
        {(formik) => (
          <StyledForm onSubmit={formik.handleSubmit}>
            <GenericInput name="name" type="text" placeholder="Name">
              Name
            </GenericInput>

            <GenericInput name="amount" type="number" placeholder="Amount">
              Value
            </GenericInput>

            <StyledGenericInput>
              <label htmlFor="type">Type</label>
              <Field name="type" as="select">
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </Field>
            </StyledGenericInput>

            <StyledGenericInput>
              Category
              <SwitchableRadioGroup role="group" aria-labelledby="category">
                {categories.map((category) => (
                  <>
                    <label htmlFor={category}>
                      {category}
                      <Field
                        key={category}
                        type="radio"
                        name="category"
                        value={category}
                      />
                    </label>
                  </>
                ))}
              </SwitchableRadioGroup>
            </StyledGenericInput>

            <Button primary type="submit">
              <FontAwesomeIcon className="action-icon" icon={faPlus} />
              <span> Dodaj</span>
            </Button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default AddExpenseForm;
