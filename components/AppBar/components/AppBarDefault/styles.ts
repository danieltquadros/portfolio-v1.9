import styled from 'styled-components';

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 150px;
  width: 100vw;
  padding: 0 16vw;
  background: ${(props) => props.theme.darkness};
  z-index: 10;
  box-shadow: 0px 2px 4px -1px ${(props) => props.theme.primary}90;

  @media (max-width: ${({ theme }) => theme.breakpoints.fk}) {
    padding: 0 8vw;
    height: 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tk}) {
    padding: 0 128px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.hd}) {
    padding: 0 96px;
    height: 90px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    padding: 0 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 0 48px;
  }
`;

export const MainMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: 3.5rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 3rem;
  }
`;

export const LogoContainer = styled.div`
  width: 80px;
  height: 80px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.hd}) {
    width: 50px;
    height: 50px;
  }
`;
