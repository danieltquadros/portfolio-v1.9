import styled from 'styled-components';

export const AboutContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;
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
    color: ${(props) => props.theme.darkOne};
    font-size: 4rem;
    text-align: start;
  }

  & p {
    color: ${(props) => props.theme.darkOne};
    max-width: 500px;
    font-family: 'Inter', sans-serif;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    border-radius: 0 0 4px 4px;

    & p {
      max-width: 700px;
    }
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
    background: #f5bf04; // definir cor do hover e adicionar no tema
  }
`;

export const RightPanel = styled.div`
  width: 25vw;
  height: 80vh;
  border-radius: 4px;
  background: ${(props) => props.theme.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 12vh;
    border-radius: 4px 4px 0 0;
  }
`;

export const ImageAndBack = styled.div`
  position: relative;
  top: 160px;
  right: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 20px;
    right: 200px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    top: 80px;
    right: -200px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    right: -100px;
  }
`;

export const BackPanel = styled.div`
  width: 24vw;
  height: 24vw;
  background-image: url('backImage.svg');

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 30vw;
    height: 30vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 36vw;
    height: 36vw;
  }
`;

export const ImagePanel = styled.div`
  width: 24vw;
  height: 24vw;
  background: ${(props) => props.theme.darkTwo};
  position: relative;
  top: -27vw;
  right: -3vw;

  & img {
    width: 24vw;
    height: 24vw;
    box-shadow: -10px 10px 20px 10px ${(props) => props.theme.darkness};
    object-fit: cover;
    filter: grayscale(100%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 30vw;
    height: 30vw;
    top: -33vw;
    & img {
      width: 30vw;
      height: 30vw;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 36vw;
    height: 36vw;
    top: -40vw;
    & img {
      width: 36vw;
      height: 36vw;
    }
  }
`;
