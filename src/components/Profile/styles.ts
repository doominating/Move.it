import styled, { css } from 'styled-components';

export const ProfileContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    color: ${theme.colors.text};
    transition: color 0.3s;

    div {
      margin-left: 1.5rem;

      strong {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${theme.colors.title};
        transition: color 0.3s;
      }

      p {
        font-size: 1rem;
        margin-top: 0.5rem;

        img {
          margin-right: 0.5rem;
        }
      }
    }

    svg {
      margin-left: auto;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.title};

      &:hover {
        color: ${({ theme }) => theme.colors.red};
        transition: color 0.3s;
      }
    }

    @media (max-width: 800px) {
      svg {
        width: 2.2rem;
      }
    }
  `}
`;
export const ProfileImage = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
`;
