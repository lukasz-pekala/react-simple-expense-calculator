import Button from "../shared/Button";
import { Field, Formik } from "formik";
import * as Yup from "yup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledForm } from "../styles/Form.styled";

import { BalanceItemCategory } from "../BalanceList/models/BalanceItem";
import { GenericInput } from "../shared/GenericInput";
import { StyledGenericInput } from "../styles/GenericInput.styled";

const categories: BalanceItemCategory[] = [
  "Transport",
  "Financial",
  "Food",
  "Health",
  "Home",
  "Other",
  "Work",
];

const AddExpenseForm = () => {
  return (
    <>
      <h2>Add new transaction</h2>
      <Formik
        initialValues={{ name: "", amount: "", category: "expense" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          amount: Yup.number().required("Amount is required"),
          category: Yup.string().required("Category is required"),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
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

            <div role="group" aria-labelledby="category">
              {categories.map((category) => (
                <>
                  <label>
                    <Field type="radio" name="category" value={category} />
                    {category}
                  </label>
                </>
              ))}
            </div>

            <div role="group" aria-labelledby="transaction-type">
              <label>
                <Field type="radio" name="type" value="expense" />
                Expense
              </label>
              <label>
                <Field type="radio" name="type" value="income" />
                Income
              </label>
            </div>

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
