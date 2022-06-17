import styled from "styled-components";

const SwitchableRadioGroup = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  label {
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.spicedButternut};
    padding: 10px 20px;
    cursor: pointer;
    color: #fff;
    min-width: 110px;
    text-align: center;
    border-radius: 3px;
  }

  label:hover {
    background-color: ${({ theme }) => theme.colors.devilBlue};
  }
`;

export default SwitchableRadioGroup;
