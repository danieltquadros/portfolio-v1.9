import styled from 'styled-components';

export type ActiveLink = 'ACTIVE' | 'INACTIVE';

interface ButtonContainerProps {
  activeLink: ActiveLink;
}

export const BottomBar = styled.div<ButtonContainerProps>`
  width: ${(props) => (props.activeLink === 'ACTIVE' ? 100 : 0)}%;
  height: 4px;
  background: ${(props) => props.theme.darkness};
  transition: 0.3s ease;
`;

export const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  a {
    color: ${(props) =>
      props.activeLink === 'ACTIVE'
        ? props.theme.darkness
        : props.theme.lightness};
    line-height: 1;
    transition: 0.3s ease;
  }

  &:hover ${BottomBar} {
    width: 100%;
  }

  &:hover a {
    color: ${(props) => props.theme.darkness};
  }
`;
