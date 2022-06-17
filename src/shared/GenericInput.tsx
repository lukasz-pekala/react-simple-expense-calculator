import { useField } from "formik";
import { StyledGenericInput } from "../styles/GenericInput.styled";

export const GenericInput = ({ children, type = "text", ...props }: any) => {
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
