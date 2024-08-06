import styled from 'styled-components';

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 300px;
  background-image: linear-gradient(
    132deg,
    ${(props) => props.theme.darkTwo} 0%,
    ${(props) => props.theme.primary} 100%
  );
  box-shadow: 0px 4px 4px 1px ${(props) => props.theme.primary};
`;

export const ContactArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 56px;
  max-width: 700px;
  transition: 0.3s ease;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border: 1px solid ${(props) => props.theme.primary};
    border-radius: 8px;
    color: ${(props) => props.theme.primary};
    cursor: pointer;
    background: #272622;
  }

  & svg {
  }
`;
