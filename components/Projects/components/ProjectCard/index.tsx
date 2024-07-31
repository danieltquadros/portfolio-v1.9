import { ReactNode, useEffect, useState } from 'react';
import VideoPlayer from '../VideoPlayer';
import {
  LeftPanel,
  LinkArea,
  ProjectsContainer,
  SkillsArea,
  SkillsContainer,
} from './styles';
import Link from 'next/link';
import { mdiLink, mdiLinkBox } from '@mdi/js';
import Icon from '@mdi/react';

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

  console.log(project.title, isPair);
  console.log(index);

  return (
    <ProjectsContainer isPair={isPair}>
      <LeftPanel>
        <h2>{project.title}</h2>
        <div>
          <p>{project.description}</p>
          <LinkArea>
            <div>
              <Icon path={mdiLinkBox} size={0.8} />
              <Link href="https://github.com/elisiane-quadros/postFeeds">
                Ver Código
              </Link>
            </div>
            <div>
              <Icon path={mdiLink} size={0.8} />
              <Link href="https://github.com/elisiane-quadros/postFeeds">
                Ver Projeto
              </Link>
            </div>
          </LinkArea>
        </div>
        <SkillsContainer>
          {project.skillList.map((skill) => {
            return (
              <SkillsArea key={skill.id}>
                {/* <div>{skill.icon}</div> */}
                {skill.icon && <Icon path={skill.icon} size={0.8} />}

                <span>{skill.name}</span>
              </SkillsArea>
            );
          })}
        </SkillsContainer>
      </LeftPanel>
      <VideoPlayer projectUrl={project.projectUrl} />
    </ProjectsContainer>
  );
};

export default ProjectCard;
