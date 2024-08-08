import { Atkinson_Hyperlegible } from 'next/font/google';
import styled from 'styled-components';

export const ContactContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 300px;
  padding: 150px 16vw 0 16vw;
  background-image: linear-gradient(
    180deg,
    ${(props) => props.theme.darkness} 0%,
    ${(props) => props.theme.primary} 100%
  );

  @media (max-width: ${({ theme }) => theme.breakpoints.fk}) {
    padding: 120px 8vw 0 8vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tk}) {
    padding: 120px 128px 0 128px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.hd}) {
    padding: 90px 96px 0 96px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    padding: 90px 64px 0 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 90px 48px 0 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 90px 32px 0 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 50px 16px 0 16px;
  }
`;

export const ContactArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2.5rem;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const ContactItem = styled.div`
  display: flex;
  gap: 4px;

  & svg path {
    color: #fff;
  }
`;
export const LogoContainer = styled.div`
  & img {
    width: 50px;
    height: auto;
    object-fit: cover;
  }
`;

export const Copy = styled.div`
  padding-bottom: 1.5rem;

  & p {
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    & p {
      font-size: 0.75rem;
    }
  }
`;
