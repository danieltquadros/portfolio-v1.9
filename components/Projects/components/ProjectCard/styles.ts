import styled from 'styled-components';

interface ProjectsContainerProps {
  isPair: boolean;
}

export const CardContainer = styled.div<ProjectsContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.isPair ? 'row' : 'row-reverse')};
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  width: calc(50% + 275px);
  height: 300px;
  /* background-color: ${(props) => props.theme.darkness}; */
  box-shadow: 0px 2px 4px 2px ${(props) => props.theme.darkOne};
  border: 1px solid ${(props) => props.theme.darkOne};
  border-radius: 8px;
  align-self: ${(props) => (props.isPair ? 'flex-start' : 'flex-end')};
  gap: 1.5rem;
  transition: height 0.5s ease;
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 600px;
  & h2 {
    color: ${(props) => props.theme.lightness};
  }
`;

export const LinkArea = styled.div`
  display: flex;
  gap: 1rem;

  & a {
    font-size: 1rem;
    font-weight: lighter;
    color: ${(props) => props.theme.primary};
    line-height: 1;
  }
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

export const RightPanel = styled.div`
  width: 500px;
  height: 268px;
  object-fit: cover;

  & img {
    width: 500px;
    height: 268px;
    /* box-shadow: -10px 10px 20px 10px ${(props) => props.theme.darkness}; */
    border-radius: 8px;
    object-fit: cover;
    filter: contrast(0.5);
    transition: 0.5 ease;
  }
  & img:hover {
    filter: none;
  }
`;
