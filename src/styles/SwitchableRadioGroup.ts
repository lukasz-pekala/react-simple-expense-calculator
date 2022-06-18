import styled from "styled-components";

const SwitchableRadioGroup = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;

  // input[type="radio"] {
  //   opacity: 0;
  //   position: fixed;
  //   width: 0;
  // }

  label {
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.spicedButternut};
    padding: 10px 20px;
    cursor: pointer;
    color: #fff;
    min-width: 100px;
    text-align: center;
    border-radius: 3px;
  }

  label:hover {
    background-color: ${({ theme }) => theme.colors.mandarinSorbet};
  }

  label > input[type="radio"]:checked {
    background-color: ${({ theme }) => theme.colors.devilBlue};
  }

  input[type="radio"]:focus + label {
    border: 2px dashed #444;
  }
`;

export default SwitchableRadioGroup;
