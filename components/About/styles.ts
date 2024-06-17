import styled from 'styled-components';

export const AboutContainer = styled.section`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.darkness};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 90px 8vw 0 8vw;

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

export const LeftPanel = styled.div`
  width: 40vw;
  height: 70vh;
  border-radius: 4px 0 0 4px;
  background-color: ${(props) => props.theme.lightness};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 40px;

  & h2 {
    color: ${(props) => props.theme.dark};
    font-size: 4rem;
    text-align: start;
  }

  & p {
    color: ${(props) => props.theme.dark};
    max-width: 500px;
    font-family: 'Inter', sans-serif;
  }
`;

export const LearnMoreButton = styled.button`
  border-width: 0;
  width: fit-content;
  padding: 0 2rem;
  height: 40px;
  background: ${(props) => props.theme.primary};

  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease;
  font-family: 'Oswald', sans-serif;

  & span {
    font-weight: 700;
    text-align: center;
  }

  &:hover {
    background: #f5bf04;
  }
`;

export const RightPanel = styled.div`
  width: 25vw;
  height: 80vh;
  border-radius: 4px;
  background: ${(props) => props.theme.primary};
`;

export const BackPanel = styled.div`
  width: 460px;
  height: 460px;
  position: relative;
  top: 160px;
  right: 120px;
  background-image: url('backImage.svg');
`;

export const ImagePanel = styled.div`
  width: 460px;
  height: 460px;
  background: ${(props) => props.theme.dark};
  position: relative;
  bottom: 360px;
  right: 40px;

  & img {
    width: 100%;
    height: 100%;
    box-shadow: -10px 10px 25px 15px #121314;
    object-fit: cover;
    filter: sepia(80%);
  }
`;
