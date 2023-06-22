import styled from 'styled-components';

const InputRadioButton = styled.input`
  display: none;
`;

const RadioIconStyled = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 5px;
  margin-right: 17px;
`;

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: min(4vw, 15px);

  &:last-of-type {
    margin-bottom: min(7.4666vw, 33px);
  }
  
  @media screen and (max-height: 650px) {
    &:last-of-type {
      margin-bottom: min(5.4666vw, 20px);
    }
  } 

  & ${InputRadioButton}:checked + ${RadioIconStyled}:after {
    content: '';
    position: absolute;
    top: 7px;
    left: 5px;
    background-color: #000000;
    display: inline-block;
    width: 3px;
    height: 7px;
    transform: rotate(-45deg);
    border-radius: 4px;
  }

  & ${InputRadioButton}:checked + ${RadioIconStyled}:before {
    content: '';
    position: absolute;
    background-color: #000000;
    display: inline-block;
    width: 2.28px;
    height: 11.03px;
    left: 10px;
    top: 3.5px;
    transform: rotate(45deg);
    border-radius: 4px;
  }
`;


export const RadioButton = ({ className, type, name, value, onChange, children, disabled }) => (
    <RadioButtonLabel className={className}>
        <InputRadioButton
            type={type}
            name={name}
            value={value}
            disabled={disabled}
            onChange={onChange}
        />
        <RadioIconStyled/>
        {children}
    </RadioButtonLabel>
)
