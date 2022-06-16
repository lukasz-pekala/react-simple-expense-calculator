import Button from "../shared/Button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddExpenseForm = () => {
  return (
    <header>
      <h1>AddExpenseForm</h1>
      <Button primary>
        <FontAwesomeIcon className="action-icon" icon={faPlus} />
        <span> Dodaj</span>
      </Button>
    </header>
  );
};

export default AddExpenseForm;
