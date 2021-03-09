import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import * as Styles from './styles';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );
  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Styles.ExperienceBarContainer>
      <span>0 xp</span>
      <Styles.ExperienceBar>
        <Styles.ExperienceBarProgress
          style={{ width: `${percentToNextLevel}%` }}
        />

        <Styles.CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience === 0 ? null : `${currentExperience} xp`}
        </Styles.CurrentExperience>
      </Styles.ExperienceBar>

      <span>{experienceToNextLevel} xp</span>
    </Styles.ExperienceBarContainer>
  );
};

export default ExperienceBar;
