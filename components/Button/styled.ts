import styled from 'styled-components';

export const StyledButton = styled.button<{ isClicked: boolean }>`
  width: 100%;
  height: 48px;
  max-width: 350px;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 8px;
  color: ${(props) => props.theme.primary};
  font-weight: 600;
  background: #272622;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0px 2px 4px -1px ${(props) => props.theme.primary}90;
    opacity: 0.95;
    background: ${(props) =>
      props.isClicked
        ? `${props.theme.primary}75`
        : props.theme.primary} !important;
    color: ${(props) => props.theme.darkness} !important;
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;
