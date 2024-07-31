import styled from 'styled-components';

interface ProjectsContainerProps {
  isPair: boolean;
}

export const ProjectsContainer = styled.div<ProjectsContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.isPair ? 'row' : 'row-reverse')};
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  width: 100%;
  height: 300px;
  /* background-color: ${(props) => props.theme.darkness}; */

  background-image: linear-gradient(153.32deg, #242a33 -65.62%, #202327 83.28%);

  /* border: 1px solid ${(props) => props.theme.primary}; */
  box-shadow: 0px 2px 4px -1px ${(props) => props.theme.lightness};
  border-radius: 8px;
  transition: height 0.5s ease;
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 600px;
  &:hover {
    & h2 {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export const LinkArea = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SkillsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const SkillsArea = styled.div`
  background: ${(props) => props.theme.darkOne};
  padding: 0.25rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* min-width: 96px; */
  gap: 0.25rem;

  & span {
    color: ${(props) => props.theme.lightness};
  }
`;
