import styled from 'styled-components';

export const WelcomePageContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 1rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
  }
`;

export const LeftPanel = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  padding-bottom: 4vw;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    align-items: flex-start;
  }
`;

export const TitleContainer = styled.h1`
  & .myName {
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
    & .myPosition {
      font-size: 4.5rem;
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
  }
`;

export const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 4vw;
  gap: 2rem;
  height: 100%;
  width: 500px;
`;

export const CardArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
