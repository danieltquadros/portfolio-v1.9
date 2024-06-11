import styled from 'styled-components';

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 90px;
  width: 100vw;

  & h1 {
    color: ${(props) => props.theme.primary};
  }
`;
