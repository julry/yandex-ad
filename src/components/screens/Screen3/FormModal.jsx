import styled from 'styled-components';
import arrow from '../../../static/images/arrowRight.svg';
import { Modal } from '../../shared/Modal';
import { MediumText } from '../../shared/MediumText';
import { Label } from '../../shared/Label';
import { Input } from '../../shared/Input';
import { useState } from 'react';
import { FlexWrapper } from '../../shared/FlexWrapper';
import { RadioButton } from '../../shared/RadioButton';
import { Text } from '../../shared/Text';
import { sendData } from '../../../utils/sendData';
import { useProgress } from '../../../hooks/useProgress';

const Content = styled.div`
  white-space: pre-line;
  padding: min(6.13vw, 23px) min(5.333vw, 20px) 0 min(6.13vw, 23px);
`;

const LabelStyled = styled(Label)`
  margin-top: min(3.2vw, 12px);
  font-weight: 400;
`;

const InputStyled = styled(Input)`
  width: 66.4vw;
  max-width: 250px;
  margin-bottom: min(2.933vw, 11px);
`;

const DataInput = styled(InputStyled)`
  margin: 0;
  
  &::placeholder {
    font-size: 15px;
  }
  
  @media screen and (max-width: 330px) {
    &::placeholder {
      font-size: min(4vw, 15px);
    }
  }
`;

const InputWrapper = styled(FlexWrapper)`
  margin: min(6.13vw, 23px) 0 min(5.333vw, 20px);
  flex-direction: row;
`;

const SendBtn = styled.button`
  border: none;
  outline: none;
  background-color: #1E8AFF;
  background-image: url(${arrow});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border-radius: var(--baseBorderRadius);
  height: 39px;
  width: 39px;
  margin-left: 10px;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  
  &:disabled {
    background-color: #D3DCEE;
  }
`;

const RadioButtonStyled = styled(RadioButton)`
  font-size: min(3.2vw, 12px);
  align-items: flex-start !important;
  color: #919DB7;

  & div {
    margin-right: 10px;
    width: 13px;
    height: 13px;
    border-radius: 3px;
    
    &:after {
      top: 5px !important;
      left: 4px !important;
      width: 2px !important;
      height: 5px !important;
    }
    
    &:before {
      width: 2px !important;
      height: 7.03px !important;
      left: 7px !important;
      top: 3px !important;
    }
  }
  
  @media screen and (min-width: 375px) {
    font-size: 12px;
  }
  
  @media screen and (max-width: 315px) {
    font-size: 10px;
  }
`;

const SendText = styled.p`
  position: relative;
  margin: min(6.4vw, 24px) 0;
  width: fit-content;
  font-size: 18px;
  
  &:after {
      content: '';
      position: absolute;
      top: 8px;
      right: -15px;
      background-color: #1E8AFF;
      display: inline-block;
      width: 4px;
      height: 11px;
      transform: rotate(-45deg);
      border-radius: 4px;
  }
  
  &:before {
      content: '';
      position: absolute;
      background-color: #1E8AFF;
      display: inline-block;
      width: 4px;
      height: 18px;
      right: -23px;
      top: 2.5px;
      transform: rotate(45deg);
      border-radius: 4px;
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  top: min(4.5vw, 17px);
  right: min(4.5vw, 17px);
  width: 17px;
  height: 17px;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    background-color: #D9D9D9;
    display: inline-block;
    width: 3px;
    height: 24px;
    right: 7px;
    top: 0;
    transform: rotate(-45deg);
    border-radius: 2px;
  }

  &:before {
    content: '';
    position: absolute;
    background-color: #D9D9D9;
    display: inline-block;
    width: 3px;
    height: 24px;
    left: 7px;
    top: 0;
    transform: rotate(45deg);
    border-radius: 2px;
  }
`;

const Link = styled.a`
    color: inherit;
`;

export const FormModal = ({onClose}) => {
    const [name, setName] = useState('');
    const [data, setData] = useState('');
    const [isClosing, setIsClosing] = useState(false);
    const { progress } = useProgress();
    const { salary, experience, id } = progress;
    const [isSending, setIsSending] = useState(false);
    const [isSend, setIsSend] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);

    const handleSendData = async () => {
        setIsSending(true);
        const result = await sendData({id, data, experience, name, salary});
        setIsSending(false);
        if (!result.error) setIsSend(true);
    }

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => onClose(), 350);
    }

    const handleAgree = () => {
        if (isSend) return;

        setIsAgreed(prevAgreed => !prevAgreed);
    };

    return (
        <Modal
            btnText={'К вакансиям!'}
            btnStyle={'top: 106%; left: min(6.13vw, 23px);'}
            onClose={() => {}}
            isClosing={isClosing}
        >
            <Content>
                <MediumText>
                    <b>
                        {
                            'Оставь номер телефона или ник\nв TG, чтобы в числе первых ' +
                            'получать актуальные карьерные предложения от Яндекс Рекламы!'
                        }
                    </b>
                </MediumText>
                {
                    isSend ? <SendText>Данные отправлены</SendText>
                        : (
                            <>
                                <LabelStyled>Как тебя зовут?</LabelStyled>
                                <InputStyled
                                    placeholder={'Имя'}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <Text>Чтобы мы могли обращаться к тебе по имени</Text>
                                <InputWrapper>
                                    <DataInput
                                        placeholder={'+7 (999) 012-34-56 / @yournick'}
                                        value={data}
                                        onChange={(e) => setData(e.target.value)}
                                    />
                                    <SendBtn disabled={!data || !isAgreed || !name || isSending} onClick={handleSendData}/>
                                </InputWrapper>
                            </>
                        )
                }
                <RadioButtonStyled
                    type="checkbox"
                    value={isAgreed}
                    onChange={handleAgree}
                    disabled={isSend}
                >
                    <span>
                        Я согласен(а) на <Link href={'https://fut.ru/personal_data_policy/'} target="_blank">
                        обработку персональных данных</Link> {'\n'}и получение информационных сообщений
                    </span>
                </RadioButtonStyled>
            </Content>
            <CloseBtn onClick={handleClose}/>
        </Modal>
    )
}