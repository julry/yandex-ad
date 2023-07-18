import styled from 'styled-components';
import screenElement from '../../static/images/startScreenElement.svg';
import arrowTop from '../../static/images/startArrowTop.svg';
import arrowBottom from '../../static/images/startArrowBottom.svg';
import { useProgress } from '../../hooks/useProgress';
import { Button } from '../shared/Button';
import { FlexWrapper } from '../shared/FlexWrapper';
import { SkewedWrapper } from '../shared/SkewedWrapper';
import { Logo } from '../shared/Logo';
import { MediumText } from '../shared/MediumText';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

const Wrapper = styled(FlexWrapper)`
  position: relative;
  background: url(${screenElement}) no-repeat 100% 0/cover;
  max-width: 640px;
`;

const DescriptionWrapper = styled(SkewedWrapper)`
  padding: min(7.466vw, 28px) min(7.2vw, 27px) min(7.466vw, 28px) min(5.8667vw, 22px);
  white-space: pre-line;
  z-index: 2;
  margin-top: min(21.6vw, 81px);
  max-width: min(94.5946vw, 365px);
`;

const Description = styled(MediumText)`
  position: relative;
  z-index: 2;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 105%;
  left: min(5.8667vw, 22px);
  z-index: 3;
`;

const ArrowTop = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;
  width: 54.4vw;
  max-width: 204px;
  height: 64vw;
  max-height: 240px;
  background: url(${arrowTop}) no-repeat 0 0/contain;
`;

const ArrowBottom = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  width: 100vw;
  max-width: 375px;
  height: 62.4vw;
  max-height: 234px;
  background: url(${arrowBottom}) no-repeat 0 0/cover;
`;

export const Screen1 = () => {
    const { next, isFirstTry } = useProgress();

    const handleClick = () => {
        if (isFirstTry) reachMetrikaGoal('start');
        next();
    };

    return (
        <Wrapper>
            <Logo />
            <DescriptionWrapper>
                <Description>
                    <b>{'Вопрос дохода — вещь\nщекотливая, не правда ли?'}</b>
                    <br/>
                    <br/>
                    {
                        'Всегда интересно подсмотреть,\n где и сколько можно зарабатывать. ' +
                        'Мы собрали данные о доходах менеджеров по продажам и работе с ' +
                        'клиентами в Екатеринбурге\n и готовы тебе их показать. А ты сможешь ' +
                        'оценить свои ожидания относительно ситуации на рынке \nи в Яндекс Рекламе 👀'
                    }
                </Description>
                <ButtonWrapper>
                    <Button onClick={handleClick}>Ого, давайте!</Button>
                </ButtonWrapper>
            </DescriptionWrapper>
            <ArrowTop />
            <ArrowBottom />
        </Wrapper>
    )
}