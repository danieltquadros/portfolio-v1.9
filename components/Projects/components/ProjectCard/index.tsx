import { ReactNode, useEffect, useState } from 'react';
import VideoPlayer from '../VideoPlayer';
import {
  LeftPanel,
  CardContainer,
  SkillsArea,
  SkillsContainer,
  RightPanel,
  LinkArea,
  DescriptionProject,
} from './styles';
import Link from 'next/link';
import Icon from '@mdi/react';
import Image from 'next/image';
import { BottomBar } from '@/components/AppBar/components/AppBarButton/styles';
import ButtonLink from '../ButtonLink';

interface SkillProps {
  id: string;
  name: string;
  icon: string;
}

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  projectUrl: string;
  skillList: SkillProps[];
}

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isPair, setIsPair] = useState(false);

  useEffect(() => {
    if (index % 2 === 0) {
      setIsPair(true);
      return;
    }
    setIsPair(false);
  }, [index]);

  return (
    <CardContainer isPair={isPair}>
      <LeftPanel>
        <h2>{project.title}</h2>
        <DescriptionProject>
          <p>{project.description}</p>
          <ButtonLink />
        </DescriptionProject>
        <SkillsContainer>
          {project.skillList.map((skill) => {
            return (
              <SkillsArea key={skill.id}>
                {skill.icon && <Icon path={skill.icon} size={0.8} />}
                <span>{skill.name}</span>
              </SkillsArea>
            );
          })}
        </SkillsContainer>
      </LeftPanel>
      {/* <VideoPlayer projectUrl={project.projectUrl} /> */}
      <RightPanel>
        <Image src="/projectImg.jpg" height={268} width={500} alt="#" />
      </RightPanel>
    </CardContainer>
  );
};

export default ProjectCard;
