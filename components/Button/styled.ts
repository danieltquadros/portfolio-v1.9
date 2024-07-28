import styled from 'styled-components';

export const StyledButton = styled.button<{ isClicked: boolean }>`
  width: 100%;
  height: 48px;
  max-width: 350px;
  padding: 0.75rem;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  background: ${(props) =>
    props.isClicked ? `${props.theme.primary}75` : props.theme.primary};
  border: none;
  cursor: pointer;
  transition: background 0.1s ease-in;

  &:hover {
    box-shadow: 0px 2px 4px -1px ${(props) => props.theme.primary}90;
    opacity: 0.95;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;
