import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import * as Styles from './styles';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Styles.ChallengeBoxContainer>
      {activeChallenge ? (
        <Styles.ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt='Challenge' />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <Styles.ChallengeButton
              failed
              type='button'
              onClick={handleChallengeFailed}
            >
              Falhei
            </Styles.ChallengeButton>
            <Styles.ChallengeButton
              succeeded
              type='button'
              onClick={handleChallengeSucceeded}
            >
              Completei
            </Styles.ChallengeButton>
          </footer>
        </Styles.ChallengeActive>
      ) : (
        <Styles.ChallengeNotActive>
          <strong>Finalize um ciclo para receber um novo desafio</strong>
          <p>
            <img src='icons/level-up.svg' alt='Level Up' />
            Avance para o próximo nível completando desafios.
          </p>
        </Styles.ChallengeNotActive>
      )}
    </Styles.ChallengeBoxContainer>
  );
};

export default ChallengeBox;
