import styled from 'styled-components';

export const BottomBar = styled.div`
  width: 0;
  height: 4px;
  background: ${(props) => props.theme.dark};
  transition: 0.3s ease;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  a {
    line-height: 1;
    transition: 0.3s ease;
  }

  &:hover ${BottomBar} {
    width: 100%;
  }

  &:hover a {
    color: ${(props) => props.theme.dark};
  }
`;
