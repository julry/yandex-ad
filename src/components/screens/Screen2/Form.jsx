import styled from 'styled-components';
import { Input } from '../../shared/Input';
import { Label } from '../../shared/Label';
import { RadioButton } from '../../shared/RadioButton';
import { MediumText } from '../../shared/MediumText';

const Wrapper = styled.div`
  margin: 0 min(27.2vw, 102px) min(11.2vw, 42px) min(6.4vw, 24px);
  max-width: 300px;
`;

const Note = styled.span`
  font-weight: 400;
`;

const InputStyled = styled(Input)`
  outline: none;
  border: none;
  background: #FFFFFF;
  border-radius: var(--baseBorderRadius);
  width: 100%;
  padding: 9px 16px 9px 10px;
  font-size: max(4.3vw, 13px);
  margin-bottom: min(8.8vw, 33px);

  &::placeholder {
    color: #D3DCEE;
  }

  @media screen and (min-width: 375px) {
    font-size: 18px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-height: 650px) {
    margin-bottom: min(5.4666vw, 20px);
  }
`;

export const Form = (props) => {
    const { salary, onChangeSalary, setExp } = props;

    return (
        <Wrapper>
            <Label>Какой у тебя опыт работы?</Label>
            <RadioButton
                type="radio"
                name="exp"
                onChange={() => setExp('менее года')}
            >
                <MediumText>менее года</MediumText>
            </RadioButton>
            <RadioButton
                type="radio"
                name="exp"
                onChange={() => setExp('от 1 до 3 лет')}
            >
                <MediumText>от 1 до 3 лет</MediumText>
            </RadioButton>
            <RadioButton
                type="radio"
                name="exp"
                onChange={() => setExp('от 3 лет')}
            >
                <MediumText>от 3 лет</MediumText>
            </RadioButton>
            <Label>Укажи свои ожидания совокупного дохода <Note>(руб. в мес.)</Note></Label>
            <InputStyled
                placeholder={'50 000'}
                value={salary}
                onChange={(e) => onChangeSalary(e.target.value)}
            />
        </Wrapper>
    );
};
