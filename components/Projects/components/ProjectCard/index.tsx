import { LeftPanel, ProjectsContainer, RightPanel } from './styles';

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
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <ProjectsContainer>
      <LeftPanel>
        <h2>{project.title}</h2>
        <div>
          <p>{project.description}</p>
        </div>
        <div>
          {project.skillList.map((skill) => {
            return <div key={skill.id}>{skill.name}</div>;
          })}
        </div>
      </LeftPanel>
      <RightPanel>
        <div></div>
      </RightPanel>
    </ProjectsContainer>
  );
};

export default ProjectCard;
