import styled from 'styled-components';

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  width: 100%;

  & h1 {
    color: ${(props) => props.theme.primary};
  }
`;
