import styled from 'styled-components';

export const SocialMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 100px;
  width: 16vw;
  height: 100vh;
  position: fixed;

  @media (max-width: ${({ theme }) => theme.breakpoints.fk}) {
    width: 12vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tk}) {
    width: 10vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.hd}) {
    width: 8vw;
  }
`;

export const SocialMenuPanel = styled.div`
  width: 100px;
  height: 300px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.hd}) {
    width: 70px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    width: 60px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 50px;
  }
`;
