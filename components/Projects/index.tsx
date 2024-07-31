// React
import React from 'react';
import Icon from '@mdi/react';
import { mdiLanguageCss3, mdiLanguageTypescript, mdiReact } from '@mdi/js';

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
      projectUrl: 'jYoYwDnin7k',
      skillList: [
        {
          id: '1',
          name: 'React',
          icon: mdiReact,
        },
        {
          id: '2',
          name: 'TypeScript',
          icon: mdiLanguageTypescript,
        },
        {
          id: '3',
          name: 'CSS',
          icon: mdiLanguageCss3,
        },
      ],
    },
    {
      id: '2',
      title: 'Project 02',
      description:
        ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, facere.',
      projectUrl: 'jYoYwDnin7k',
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
    {
      id: '3',
      title: 'Project 03',
      description:
        ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, facere.',
      projectUrl: 'jYoYwDnin7k',
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
        {projectList.map((project, index: number) => {
          return (
            <ProjectCard key={project.id} project={project} index={index} />
          );
        })}
      </ProjectContainer>
    </PageContainer>
  );
};

export default Projects;
