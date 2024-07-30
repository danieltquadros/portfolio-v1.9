// React
import React from 'react';

// Global components
import PageContainer from '../PageContainer';

//Style

import { ProjectContainer } from './styles';
import ProjectCard, { ProjectProps } from './components/ProjectCard';

const Projects = () => {
  const projectList: ProjectProps[] = [
    {
      id: '1',
      title: 'Project 01',
      description:
        ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, facere.',
      projectUrl: '',
      skillList: [
        {
          id: '1',
          name: 'React',
          icon: '',
        },
        {
          id: '2',
          name: 'Next',
          icon: '',
        },
      ],
    },
    {
      id: '2',
      title: 'Project 02',
      description:
        ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, facere.',
      projectUrl: '',
      skillList: [
        {
          id: '1',
          name: 'React',
          icon: '',
        },
        {
          id: '3',
          name: 'Typescript',
          icon: '',
        },
      ],
    },
  ];
  return (
    <PageContainer id="projects">
      <ProjectContainer>
        {projectList.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </ProjectContainer>
    </PageContainer>
  );
};

export default Projects;
