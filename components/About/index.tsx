// React
import React from 'react';

// Global components
import PageContainer from '../PageContainer';

// Styles
import {
  AboutCard,
  AboutContainer,
  BackCard,
  ImagePanel,
  ImageWindow,
  InformationContainer,
  Left,
  LeftPanel,
  Right,
  RightPanel,
  RightPanelMask,
  SocialMediaCard,
  SocialMediaContainer,
  Strip,
  StripPanelsPosition,
} from './styles';
import Image from 'next/image';
import Button from '@/components/Button';
import { mdiEmailOutline, mdiGithub, mdiLinkedin, mdiWhatsapp } from '@mdi/js';
import Link from 'next/link';
import Icon from '@mdi/react';

interface SocialMedia {
  id: string;
  icon: string;
  url: string;
}

const About = () => {
  const stripPositionList: StripPanelsPosition[] = [
    {
      id: '1',
      left: 20,
      window: 60,
      right: 20,
    },
    {
      id: '2',
      left: 10,
      window: 80,
      right: 10,
    },
    {
      id: '3',
      left: 0,
      window: 100,
      right: 0,
    },
    {
      id: '4',
      left: 10,
      window: 80,
      right: 10,
    },
    {
      id: '5',
      left: 20,
      window: 60,
      right: 20,
    },
  ];

  const socialMediaList: SocialMedia[] = [
    {
      id: '1',
      icon: mdiWhatsapp,
      url: '',
    },
    {
      id: '2',
      icon: mdiLinkedin,
      url: 'https://www.linkedin.com/in/elisiane-q/',
    },
    {
      id: '3',
      icon: mdiEmailOutline,
      url: '',
    },
    {
      id: '4',
      icon: mdiGithub,
      url: 'https://github.com/elisiane-quadros',
    },
  ];

  return (
    <PageContainer id="about">
      <AboutContainer>
        <LeftPanel>
          <BackCard />
          <AboutCard>
            <InformationContainer>
              <h2>Sobre mim</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                facilis laudantium obcaecati aperiam. Iste deleniti, labore sed
                quae asperiores, doloribus dolor esse praesentium suscipit non
                aliquam totam inventore porro ipsam.
              </p>
            </InformationContainer>
            <Button>Entre em contato</Button>
          </AboutCard>
        </LeftPanel>
        <RightPanel>
          <ImagePanel>
            <RightPanelMask>
              {stripPositionList.map((position) => {
                return (
                  <Strip key={position.id}>
                    <Left position={position} />
                    <ImageWindow position={position} />
                    <Right position={position} />
                  </Strip>
                );
              })}
            </RightPanelMask>
            <Image src="/perfil.png" width={631} height={659} alt="" />
          </ImagePanel>
          <SocialMediaContainer>
            {socialMediaList.map((socialMedia) => {
              return (
                <SocialMediaCard key={socialMedia.id}>
                  <Link href={socialMedia.url} target="_blank">
                    <Icon path={socialMedia.icon} size={1.2} />
                  </Link>
                </SocialMediaCard>
              );
            })}
          </SocialMediaContainer>
        </RightPanel>
      </AboutContainer>
    </PageContainer>
  );
};

export default About;
