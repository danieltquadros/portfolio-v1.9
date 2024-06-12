import styled from 'styled-components';

export const AboutContainer = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #3a3734;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8vw;
`;

export const LeftPanel = styled.div`
  width: 40vw;
  height: 70vh;
  border-radius: 4px 0 0 4px;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 40px;

  & h2 {
    color: #3a3734;
    font-size: 4rem;
    text-align: start;
  }

  & p {
    color: #3a3734;
    font-size: 20px;
    max-width: 500px;
  }
`;

export const LearnMoreButton = styled.button`
  border-width: 0;
  width: 160px;
  height: 40px;
  background: ${(props) => props.theme.primary};
  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s ease;

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
  background: #3a3734;
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
