import styled from 'styled-components';

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 150px;
  width: 100vw;
  padding: 0 16vw;
  background: ${(props) => props.theme.primary}80;
  backdrop-filter: blur(5px);
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.fk}) {
    padding: 0 12vw;
    height: 120px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tk}) {
    padding: 0 10vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.hd}) {
    padding: 0 8vw;
    height: 90px;
  }
`;

export const MainMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export const LogoTemp = styled.div`
  width: 80px;
  height: 80px;
  background: #ccc;

  @media (max-width: ${({ theme }) => theme.breakpoints.hd}) {
    width: 50px;
    height: 50px;
  }
`;
