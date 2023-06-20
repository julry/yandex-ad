import styled from 'styled-components';

const ButtonWrapper = styled.button`
  outline: none;
  border: none;
  border-radius: var(--baseBorderRadius);
  background: #FFED45;
  background: linear-gradient(80.33deg, #FFB800 -6.08%, #FFED45 108.66%);
  font-family: 'Yandex Sans Text', 'Times New Roman', serif;
  font-weight: 700;
  font-size: 16px;
  padding: 10px 27px;
  cursor: pointer;
  color: black;
`;

export const Button = (props) => {

    return <ButtonWrapper { ...props }/>
}