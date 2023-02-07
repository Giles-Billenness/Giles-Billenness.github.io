import styles from './projects-section.module.scss';
import classNames from 'classnames';
import { ProjectCard } from '../project-card/project-card';

export interface ProjectsSectionProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-projects-sections-and-templates
 */
export const ProjectsSection = ({
    className,
    children = 'ProjectsSection',
}: ProjectsSectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <ProjectCard projectTitle="Project title (Summer 2020)" projectBio="Bio about the project. What is is and why. Experimetned with x y z. Contributed to...." projectImg="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" links="https://github.com/Giles-Billenness" toolsLangs="React,java,python,etc"/>
            <ProjectCard projectTitle="Project title (Summer 2020)" projectBio="Bio about the project. What is is and why. Experimetned with x y z. Contributed to...." projectImg="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" links="https://github.com/Giles-Billenness" toolsLangs="React,java,python,etc"/>
            <ProjectCard projectTitle="Project title (Summer 2020)" projectBio="Bio about the project. What is is and why. Experimetned with x y z. Contributed to...." projectImg="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" links="https://github.com/Giles-Billenness" toolsLangs="React,java,python,etc"/>
        </div>
    );
};
