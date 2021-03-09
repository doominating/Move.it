import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import * as Styles from './styles';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <Styles.ProfileContainer>
      <Styles.ProfileImage
        src='https://github.com/afonsoamaro.png'
        alt='Afonso Amaro'
      />
      <div>
        <strong>Afonso Amaro</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level {level}
        </p>
      </div>
    </Styles.ProfileContainer>
  );
};

export default Profile;
