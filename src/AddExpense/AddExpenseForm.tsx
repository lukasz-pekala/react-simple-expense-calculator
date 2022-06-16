import Button from "../shared/Button/Button";
import { Field, Formik, useField } from "formik";
import * as Yup from "yup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledForm } from "./Form/Form.styled";
import styled from "styled-components";

const StyledGenericInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 1em;

  input {
    font-size: 1em;
    padding: 0.5em;
    border: 1px solid #d1ccc0;
  }

  input.error {
    border: 1px solid #ff5252;
  }

  div.error {
    color: #ff5252;
  }
`;

const GenericInput = ({ children, type = "text", ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <StyledGenericInput>
      <label htmlFor="name">{children}</label>
      <input
        type={type}
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error" : null}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </StyledGenericInput>
  );
};

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
              Name
            </GenericInput>

            <label htmlFor="favouriteColor">Type</label>
            <Field name="favouriteColor" as="select">
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </Field>
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
