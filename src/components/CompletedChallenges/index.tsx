import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import * as Styles from './styles';

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <Styles.CompletedChallengesContainer>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Styles.CompletedChallengesContainer>
  );
};

export default CompletedChallenges;
