import styled from 'styled-components';

export const PageContainerComponent = styled.section`
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  padding: 150px 16vw 0 16vw;

  &.dark {
    background: ${(props) => props.theme.darkTwo};
  }

  &.darkness {
    background: ${(props) => props.theme.darkness};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.fk}) {
    padding: 120px 8vw 0 8vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tk}) {
    padding: 120px 128px 0 128px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.hd}) {
    padding: 90px 96px 0 96px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    padding: 90px 64px 0 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 90px 48px 0 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 90px 32px 0 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 90px 16px 0 16px;
  }
`;
