import styled from 'styled-components';

export const ButtonLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const BottomBarLink = styled.div`
  width: 0%;
  height: 1px;
  background: ${(props) => props.theme.primary};
  transition: 0.3s ease;
`;

export const ButtonLinkArea = styled.div`
  a {
    color: ${(props) => props.theme.lightness};
    line-height: 1;
    font-size: 1rem;
    transition: 0.3s ease;
  }
  &:hover ${BottomBarLink} {
    width: 100%;
  }

  &:hover a {
    color: ${(props) => props.theme.primary};
  }
`;
