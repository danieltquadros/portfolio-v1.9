import styled from 'styled-components';

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 90px;
  width: 100vw;
  padding: 0 8vw;
  background: ${(props) => props.theme.primary}80;
  backdrop-filter: blur(5px);
  z-index: 1;

  & h1 {
    color: ${(props) => props.theme.primary};
  }
`;

export const MainMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;
