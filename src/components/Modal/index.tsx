import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import * as Styles from './styles';

const Modal: React.FC = () => {
  const { level, closeModal } = useContext(ChallengesContext);

  return (
    <Styles.Overlay>
      <Styles.Container>
        <header>{level}</header>

        <strong>Parabéns</strong>

        <p>Você alcançou um novo nível!</p>

        <button type='button' onClick={closeModal}>
          <img src='/icons/close.svg' alt='Fechar modal' />
        </button>
      </Styles.Container>
    </Styles.Overlay>
  );
};

export default Modal;
