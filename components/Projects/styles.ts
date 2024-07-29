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
`;

export const RightPanel = styled.div`
  width: 400px;
  height: 250px;
  border: 1px solid ${(props) => props.theme.lightness};
`;
