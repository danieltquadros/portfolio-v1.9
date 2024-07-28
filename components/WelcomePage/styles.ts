import styled from 'styled-components';

export const WelcomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  height: calc(100vh - 90px);
  min-height: 704px;
  width: 100%;
  padding: 1rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    height: 100%;
  }
`;

export const LeftPanel = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 10vh;
  height: 100%;
  width: 100%;

  @media (max-height: 1080px) {
    gap: 3rem;
  }

  @media (max-height: 644px) {
    position: relative;
    bottom: 48px;
  }

  @media (max-height: 592px) {
    position: relative;
    bottom: 96px;
  }
`;

export const TitleContainer = styled.h1`
  & .myName {
    color: #fff;
    white-space: nowrap;
    font-size: 9.5rem;
    line-height: 1;
  }

  & .myPosition {
    color: ${(props) => props.theme.primary};
    white-space: nowrap;
    font-size: 12rem;
    line-height: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.fk}) {
    & .myName {
      font-size: 7rem;
    }
    & .myPosition {
      font-size: 9rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tk}) {
    & .myName {
      font-size: 5.5rem;
    }
    & .myPosition {
      font-size: 7.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.hd}) {
    & .myName {
      font-size: 4rem;
    }
    & .myPosition {
      font-size: 6rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    & .myPosition {
      font-size: 5.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    & .myPosition {
      font-size: 5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    & .myName {
      font-size: 3.25rem;
    }
    & .myPosition {
      font-size: 4.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    & .myName {
      font-size: 3.25rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    & .myName {
      font-size: 2.75rem;
    }

    & .myPosition {
      font-size: 3.75rem;
      white-space: normal;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    & .myPosition {
      font-size: 2.875rem;
    }

    & .myName {
      font-size: 2.25rem;
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.hd}) {
    gap: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: 0.5rem;
  }

  & p {
    display: flex;
    flex: 1;
  }
`;

export const RightPanel = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 4vh;
  height: 700px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 100%;
  }

  @media (max-height: 1080px) {
    gap: 1.5rem;
  }
`;

export const CardAreaTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 600px;
  padding: 0 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
    justify-content: center;
  }
`;

export const CardArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vh;

  @media (max-height: 1080px) {
    gap: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.hd}) {
    gap: 1rem;
  }
`;
