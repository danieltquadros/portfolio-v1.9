import styled from 'styled-components';

export const SkillsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 90px 8vw 0 8vw;
  background: ${(props) => props.theme.darkness};

  @media (max-width: ${({ theme }) => theme.breakpoints.fk}) {
    padding: 120px 12vw 0 12vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tk}) {
    padding: 120px 10vw 0 10vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.hd}) {
    padding: 90px 8vw 0 8vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 90px 4vw 0 4vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0 4vw 90px 4vw;
  }
`;
