import styled from 'styled-components';

interface ProjectsContainerProps {
  isPair: boolean;
}

export const CardContainer = styled.div<ProjectsContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.isPair ? 'row' : 'row-reverse')};
  justify-content: ${(props) => (props.isPair ? 'space-between' : 'flex-end')};
  align-items: center;
  padding: 1.5rem;
  width: calc(50% + 275px);
  height: 300px;
  box-shadow: 0px 2px 8px -1px ${(props) => props.theme.darkOne};
  border-radius: 8px;
  align-self: ${(props) => (props.isPair ? 'flex-start' : 'flex-end')};
  gap: 1.5rem;
  transition: height 0.5s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    height: 100%;
    align-items: flex-start;
    flex-direction: column-reverse;
    justify-content: ${(props) => (props.isPair ? 'space-between' : 'center')};
    gap: 1rem;
    a {
      font-size: 1rem;
    }
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 1rem;
  }
`;
export const DescriptionProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 0.25rem;
  }
`;

export const LinkArea = styled.div`
  display: flex;
  gap: 1.5rem;

  & a {
    font-size: 1rem;
    font-weight: lighter;
    color: ${(props) => props.theme.lightness};
    line-height: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 1.5rem;
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
  transition: height 0.5s ease;

  & span {
    color: ${(props) => props.theme.lightness};
  }
`;

export const RightPanel = styled.div`
  width: 500px;
  height: 268px;
  object-fit: cover;
  transition: 0.5s ease;

  & img {
    width: 100%;
    /* height: 100%; */
    /* box-shadow: -10px 10px 20px 10px ${(props) => props.theme.darkness}; */
    border-radius: 8px;
    object-fit: cover;
    filter: contrast(0.7);
  }
  & img:hover {
    filter: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    height: 100%;
  }
`;
