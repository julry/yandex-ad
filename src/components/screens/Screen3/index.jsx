import { Logo } from '../../shared/Logo';
import styled from 'styled-components';
import ReactSlider from 'react-slider'
import { FlexWrapper } from '../../shared/FlexWrapper';
import arrow from '../../../static/images/arrowBlue.svg';
import restart from '../../../static/images/restart.svg';
import { useCallback, useEffect, useRef, useState } from 'react';
import { RulesModal } from './RulesModal';
import { FormModal } from './FormModal';
import { useProgress } from '../../../hooks/useProgress';
import { KEYS_TO_POSITION, KEYS_TO_TEXT, MODAL_TYPES, ranges } from './screen3-constants';
import { SkewedWrapper } from '../../shared/SkewedWrapper';
import { Button } from '../../shared/Button';
import { Text } from '../../shared/Text';

const Wrapper = styled(FlexWrapper)`
  filter: ${({$isModalShown}) => $isModalShown ? 'blur(4px)' : 'none'};
  background: url(${arrow}) no-repeat 0 0 /cover;
`;

const Content = styled(FlexWrapper)`
  flex-direction: row;
  justify-content: space-between;
`;

const Slider = styled(ReactSlider)`
  width: 14px;
  height: 126vw;
  max-height: 473px;
  margin: min(3.7vw, 14px) min(20vw, 75px) min(2.933vw, 11px) min(8vw, 30px);
  background: #FFFFFF;
  border-radius: 20px;

  @media screen and (min-width: 640px) and (max-height: 650px) {
    height: 70vh;
    min-height: 250px;
  }
`;

const ThumbWrapper = styled.div`
  padding: 0 15px;
  left: -22px;
  outline: none;
`;

const Thumb = styled.div`
  height: 7px;
  width: 28px;
  background: #FFEC42;
  background: linear-gradient(170.39deg, #FFB800 -15.52%, #FFEC42 108.44%);
  border-radius: 20px;
`;

const Mark = styled.span`
  width: 100%;
  height: 3px;
  background: ${({ k }) => k === 114000 ? '#D3DCEE' : '#919DB7'};
`;

const SliderWrapper = styled.div`
  margin-top: min(9.2vw, 42px);

  @media screen and (max-height: 670px) {
    margin-top: min(5.7vw, 42px);
  }
  
  @media screen and (min-width: 640px) and (max-height: 650px) {
    margin-top: 25px;
  }
`;

const InfoWrapper = styled(FlexWrapper)`
  padding: min(20.333vw, 95px) 0 min(5.067vw, 19px);
  max-width: 350px;

  @media screen and (max-height: 670px) {
    padding-top: min(13.667vw, 70px);
  }

  @media screen and (min-width: 640px) and (max-height: 650px) {
    padding-top: 50px;
  }
`;

const SalaryWrapper = styled(FlexWrapper)`
  margin-left: min(5.333vw, 20px);
  height: 37.6vw;
  max-height: 145px;

  @media screen and (min-width: 640px) and (max-height: 650px) {
    max-height: 110px;
  }
`;

const Salary = styled.p`
  font-size: max(6.7vw, 25px);
  font-weight: 700;
  margin-bottom: min(3.2vw, 12px);

  @media screen and (min-width: 375px) {
    font-size: 25px;
  }

  @media screen and (max-width: 315px) {
    font-size: 20px;
  }
`;

const TextWrapper = styled(FlexWrapper)`
  justify-content: flex-end;
  padding-right: 25px;

  @media screen and (min-width: 380px) {
    & ${Text} {
      max-width: 225px;
    }
  }
`;

const RangeText = styled(Text)`
  margin-left: min(4.8vw, 18px);
`;

const MarkText = styled(Text)`
  position: absolute;
  ${({k}) => KEYS_TO_POSITION[k]};
`;

const SkewedWrapperStyled = styled(SkewedWrapper)`
  transform: scale(-1, 1);
  margin-top: min(5.33vw, 20px);
  min-height: 50vw;
  
  @media screen and (min-width: 400px) {
    min-height: 170px;
  }
`;

const Description = styled(Text)`
  position: relative;
  z-index: 3;
  white-space: pre-line;
  transform: scale(-1, 1);
  margin: min(4.5vw, 17px) min(6.6vw, 30px) min(5.3vw, 20px) min(5.3vw, 20px);
  
  @media screen and (min-width: 380px) {
    line-height: 18px;
  }
  
  @media screen and (min-width: 540px) {
    white-space: unset;
    max-width: none;
  }
  
  @media screen and (min-width: 640px) {
    margin-left: 30px;
  }

  @media screen and (min-width: 640px) and (max-height: 700px){
    margin-left: 45px;
  }
`;

const ButtonStyled = styled(Button)`
  position: absolute;
  bottom: -21.5%;
  right: 10%;
  z-index: 5;
  transform: scale(-1, 1);
  padding: 10px 15px;
  
  @media screen and (max-width: 345px) {
    font-size: 12px;
  }
  @media screen and (max-width: 310px) {
    padding: 10px;
  }

  @media screen and (min-width: 800px) {
    bottom: -26%;
  }
`;

const RestartButton = styled.button`
  position: absolute;
  top: min(24px, 6.9vw);
  right: min(22px, 5.8vw);
  outline: none;
  border: none;
  width: 31px;
  height: 31px;
  background: url(${restart}) no-repeat 0 0 / cover;
  cursor: pointer;
`;

export const Screen3 = () => {
    const [modal, setModal] = useState({shown: true, type: MODAL_TYPES.rules});
    const { salary, isFirstTry, restart } = useProgress();
    const [value, setValue] = useState();
    const [formShown, setFormShown] = useState(false);
    const [currentRange, setCurrentRange] = useState({});
    const $timerRef = useRef();

    const handleCloseModal = () => {
        setModal({shown: false, type: ''});
    }

    const getSalary = () => {
        let salaryValue = salary.slice(0, -3);
        const valueRange = ranges.find(range => salaryValue <= range.maxM && salaryValue >= range.minM);
        return (valueRange.minS + (salaryValue - valueRange.minM) * valueRange.k) * 1000;
    };

    const getSalaryDisplayed = useCallback(() => {
        if (!value) return +salary;
        let salaryValue = value / 1000;
        const valueRange = ranges.find(range => salaryValue <= range.maxS && salaryValue >= range.minS);
        if (valueRange) {
            salaryValue = (valueRange.minM + (salaryValue - valueRange.minS) * (1 / valueRange.k));
        }

        return Math.round(salaryValue) * 1000;
    }, [value, salary]);

    useEffect(() => {
        let valueRange = {};
        if (value) {
            const salaryValue = value / 1000;
            valueRange = ranges.find(range => salaryValue < range.maxS && salaryValue > range.minS);
        } else if (salary) {
            const salaryValue = salary.slice(0, -3);
            valueRange = ranges.find(range => salaryValue <= range.maxM && salaryValue >= range.minM);
        }
        if (valueRange) {
            if (valueRange.minM === 80 ) {
                if (!$timerRef?.current && !modal?.shown && !formShown && isFirstTry) {
                    $timerRef.current = setTimeout(() => {
                        setModal({shown: true, type: MODAL_TYPES.form});
                        setFormShown(true);
                    }, 5000);
                }
            } else {
                 clearTimeout($timerRef.current);
                 $timerRef.current = null;
            }
            setCurrentRange(valueRange);
        }
    }, [value, salary, modal.shown, formShown, isFirstTry]);

    return (
        <>
            <Wrapper $isModalShown={modal.shown}>
                <Logo/>
                <Content>
                    <SliderWrapper>
                        <RangeText>250 тыс.</RangeText>
                        <Slider
                            defaultValue={getSalary()}
                            renderThumb={(props, state) => (
                                <ThumbWrapper {...props} {...state}>
                                    <Thumb />
                                </ThumbWrapper>
                            )}
                            renderMark={(props) => (
                                <Mark k={props.key} {...props}>
                                    <MarkText k={props.key}>{KEYS_TO_TEXT[props.key]}</MarkText>
                                </Mark>
                            )}
                            orientation="vertical"
                            onChange={(v) => setValue(v)}
                            marks={[93000, 114000, 150000, 205000]}
                            invert
                            step={100}
                            min={40000}
                            max={250000}
                        />
                        <RangeText>40 тыс.</RangeText>
                    </SliderWrapper>
                    <InfoWrapper>
                        <SalaryWrapper>
                            <Salary>
                                {getSalaryDisplayed().toLocaleString('ru-RU')} руб.
                            </Salary>
                            <TextWrapper>
                                <Text>{currentRange.text}</Text>
                            </TextWrapper>
                        </SalaryWrapper>
                        <SkewedWrapperStyled>
                            <Description>
                                {
                                    typeof (currentRange.description) === 'function'
                                    ? currentRange.description({salary, value})
                                    : currentRange.description
                                }
                            </Description>
                            <ButtonStyled
                                onClick={() => setModal({shown: true, type: MODAL_TYPES.form})}
                            >
                                Хочу в Яндекс Рекламу
                            </ButtonStyled>
                        </SkewedWrapperStyled>
                    </InfoWrapper>
                </Content>
                <RestartButton onClick={restart}/>
            </Wrapper>
            {modal.shown && (modal.type === MODAL_TYPES.rules ?
                <RulesModal onClose={handleCloseModal}/> : <FormModal onClose={handleCloseModal}/>
            )}
        </>
    );
}