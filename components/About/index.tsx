// React
import React from 'react';

// Global components
import PageContainer from '../PageContainer';

// Styles
import {
  AboutContainer,
  BackPanel,
  ImageAndBack,
  ImagePanel,
  LearnMoreButton,
  LeftPanel,
  RightPanel,
} from './styles';
import Image from 'next/image';

const About = () => {
  return (
    <PageContainer id="about">
      <AboutContainer>
        <LeftPanel>
          <h2>Sobre</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            odit similique provident necessitatibus, natus laboriosam quasi
            quos, eligendi accusantium libero molestiae, sequi doloribus beatae
            at!
          </p>
          <LearnMoreButton>
            <span>Entre em Contato</span>
          </LearnMoreButton>
        </LeftPanel>
        <RightPanel>
          <ImageAndBack>
            <BackPanel />
            <ImagePanel>
              <Image src="/perfil.png" height={100} width={100} alt="" />
            </ImagePanel>
          </ImageAndBack>
        </RightPanel>
      </AboutContainer>
    </PageContainer>
  );
};

export default About;
