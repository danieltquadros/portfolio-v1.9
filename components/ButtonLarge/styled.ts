import styled from 'styled-components';

export const ButtonLargeContainer = styled.div`
  border: 1px solid ${(props) => props.theme.lightness};
  border-radius: 8px;
  padding: 2rem;
  width: 500px;
  cursor: pointer;
  /* transition: 1s ease; */
`;
