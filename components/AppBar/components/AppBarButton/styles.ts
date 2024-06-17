import styled from 'styled-components';

export type ActiveLink = 'ACTIVE' | 'INACTIVE';

interface ButtonContainerProps {
  active_link: ActiveLink;
}

export const BottomBar = styled.div<ButtonContainerProps>`
  width: ${(props) => (props.active_link === 'ACTIVE' ? 100 : 0)}%;
  height: 4px;
  background: ${(props) => props.theme.primary};
  transition: 0.3s ease;
`;

export const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;

  a {
    color: ${(props) =>
      props.active_link === 'ACTIVE'
        ? props.theme.primary
        : props.theme.lightness};
    line-height: 1;
    font-size: 2.5rem;
    transition: 0.3s ease;
  }

  &:hover ${BottomBar} {
    width: 100%;
  }

  &:hover a {
    color: ${(props) => props.theme.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.fk}) {
    a {
      font-size: 2rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tk}) {
    a {
      font-size: 1.75rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.hd}) {
    a {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    a {
      font-size: 1.25rem;
    }
  }
`;
