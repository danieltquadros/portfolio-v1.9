import styled from 'styled-components';

export const ServiceContainer = styled.div`
  display: grid;
  justify-items: center;
  align-content: space-evenly;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  min-height: calc(100vh - 90px);
  padding: 1rem 0;

  & h2 {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
