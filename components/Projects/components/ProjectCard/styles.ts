import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 100%;
  height: 300px;
  border: 1px solid ${(props) => props.theme.lightness};
  border-radius: 8px;
  transition: height 0.5s ease;
`;

export const LeftPanel = styled.div`
  max-width: 600px;

  &:hover {
    & h2 {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export const RightPanel = styled.div`
  border: 1px solid ${(props) => props.theme.lightness};
  border-radius: 8px;
  width: 100%;
  height: 250px;
  max-width: 500px;

  &:hover {
    border: 1px solid ${(props) => props.theme.primary};
    box-shadow: 0px 2px 8px -1px ${(props) => props.theme.primary};
  }
`;
