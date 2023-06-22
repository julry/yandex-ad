import { useState } from 'react';
import { useProgress } from '../../../hooks/useProgress';
import styled from 'styled-components';
import { Logo } from '../../shared/Logo';
import { Button } from '../../shared/Button';
import { FlexWrapper } from '../../shared/FlexWrapper';
import arrow from '../../../static/images/arrowBlue.svg';
import { Modal } from '../../shared/Modal';
import { MediumText } from '../../shared/MediumText';
import { Form } from './Form';
import { sendData } from '../../../utils/sendData';

const Wrapper = styled(FlexWrapper)`
  filter: ${({$isModalShown}) => $isModalShown ? 'blur(4px)' : 'none'};
  background: url(${arrow}) no-repeat 0 0 /cover;
`;

const Title = styled.p`
  font-size: max(5.8vw, 16px);
  font-weight: 700;
  margin: min(17.6vw, 66px) min(11.7vw, 44px) min(9.6vw, 37px) min(6.4vw, 24px);
  max-width: 370px;

  @media screen and (min-width: 375px) {
    font-size: 20px;
  }
  
  @media screen and (max-height: 700px) {
    margin-top: min(9.6vw, 37px);
  }

  @media screen and (min-width: 640px) and (max-height: 650px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const ButtonStyled = styled(Button)`
  margin: 0 auto;
  
  &:disabled {
    opacity: 0.7;
  }
`;

const ModalStyled = styled(Modal)`
  white-space: pre-line;
  padding: min(9.6vw, 36px) min(5.6vw, 21px) min(9.6vw, 36px) min(6.4vw, 24px);
`;

export const Screen2 = () => {
    const {next, updateProgress} = useProgress();
    const [modal, setModal] = useState({shown: false, content: () => {}, btnStyle: ''});
    const [experience, setExp] = useState('');
    const [salary, setSalary] = useState('');

    const handleChangeSalary = (value) => {
        const val = value.split(/[^0-9]/g).join('');
        if (isNaN(+val) || val.length > 6) return;
        setSalary((+val).toLocaleString());
    }

    const handleNext = () => {
        const sal = salary.split(/[^0-9]/g).join('');
        if (+sal > 250000) {
            const content = () => (
                <>
                    <b>{'Раскроем первый секрет: \n'}</b>
                    {
                        'зарплату выше 250 тысяч предлагают редко, и в основном специалистам с ' +
                        'опытом более 10 лет. Попробуй ввести число немного меньше! 🙁'
                    }
                </>
            );

            setModal({shown: true, content, btnStyle: `top: 101%; left: min(6.4vw, 24px);`});

            return;
        }

        if (+sal < 40000) {
            const content = () => 'Бери сумму выше!';

            setModal({shown: true, content, btnStyle: `top: 83%; left: min(6.4vw, 24px);`, skewDeg: '2.5'});

            return;
        }
        const id = Math.floor(Math.random() * 1000 + 100) + '-' + Math.floor(Math.random() * 1000);
        sendData({id, data: '', experience, name: '', salary});
        updateProgress({
            experience,
            salary: sal,
            id
        });
        next();
    }

    return (
        <>
            <Wrapper $isModalShown={modal.shown}>
                <Logo/>
                <Title>
                    {
                        'Чтобы понять, где находятся твои ожидания относительно предложений работодателей, ' +
                        'ответь на несколько вопросов о себе:'
                    }
                </Title>
                <Form
                    salary={salary}
                    onChangeSalary={handleChangeSalary}
                    setExp={setExp}
                />
                <ButtonStyled
                    onClick={handleNext}
                    disabled={!salary || !experience}
                >
                    Посмотреть результат
                </ButtonStyled>
            </Wrapper>
            {modal.shown && (
                <ModalStyled
                    btnText={'Хорошо'}
                    onClose={() => setModal({shown: false, content: () => {}, btnStyle: ''})}
                    btnStyle={modal.btnStyle}
                    skewDeg={modal?.skewDeg}
                >
                    <MediumText>
                        {modal.content()}
                    </MediumText>
                </ModalStyled>
            )}
        </>
    );
};