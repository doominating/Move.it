import { CheckCircle } from '@styled-icons/boxicons-solid/CheckCircle';
import { Close } from '@styled-icons/evaicons-solid/Close';
import { Play } from '@styled-icons/foundation/Play';
import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import * as Styles from './styles';

const Countdown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <>
      <Styles.CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Styles.CountdownContainer>

      {hasFinished ? (
        <Styles.CountdownButton disabled>
          Ciclo encerrado <CheckCircle />
        </Styles.CountdownButton>
      ) : (
        <>
          {isActive ? (
            <Styles.CountdownButton
              isActive
              type='button'
              onClick={resetCountdown}
            >
              Abandonar ciclo <Close />
            </Styles.CountdownButton>
          ) : (
            <Styles.CountdownButton type='button' onClick={startCountdown}>
              Iniciar um ciclo <Play />
            </Styles.CountdownButton>
          )}
        </>
      )}
    </>
  );
};

export default Countdown;
