// React
import React from 'react';

// Global components
import PageContainer from '../PageContainer';

//Style

import { LeftPanel, ProjectsContainer, RightPanel } from './styles';

const Projects = () => {
  return (
    <PageContainer id="projects">
      <ProjectsContainer>
        <LeftPanel>
          <h2>Projeto _01</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quae, tempore totam eligendi saepe alias porro reiciendis
              voluptatum.
            </p>
          </div>
          <div className="habilits"></div>
        </LeftPanel>
        <RightPanel>
          <div></div>
        </RightPanel>
      </ProjectsContainer>
    </PageContainer>
  );
};

export default Projects;
