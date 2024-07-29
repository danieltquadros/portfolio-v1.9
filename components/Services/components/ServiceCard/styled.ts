import styled from 'styled-components';

export const ServiceCardContainer = styled.div`
  display: flex;
  flex: 8;
  flex-basis: 24;
  border: 1px solid ${(props) => props.theme.lightness};
  border-radius: 8px;
  /* width: 30vw; */
`;
