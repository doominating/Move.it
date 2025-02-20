import styled, { css } from 'styled-components';

export const ExperienceBarContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 90%;
    color: ${theme.colors.text};
    transition: color 0.3s;

    span:last-child {
      font-size: 1rem;
      width: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `}
`;
export const ExperienceBar = styled.div`
  ${({ theme }) => css`
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background-color: ${theme.colors.grayLine};
    margin: 0 1.5rem;
    position: relative;
  `}
`;
export const ExperienceBarProgress = styled.div`
  ${({ theme }) => css`
    height: 4px;
    border-radius: 4px;
    background-color: ${theme.colors.green};
  `}
`;

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);

  b {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
