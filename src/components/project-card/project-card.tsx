import styles from './project-card.module.scss';
import classNames from 'classnames';

export interface ProjectCardProps {
    className?: string;
    children?: React.ReactNode;
    projectTitle: string;
    projectBio: string;
    projectImg: string;
    links: string;
    toolsLangs: string;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-project-cards-and-templates
 */
export const ProjectCard = ({
    className,
    projectTitle,
    projectBio,
    projectImg,
    links,
    toolsLangs,
}: ProjectCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className="ProjectTitle">{projectTitle}</h1>
                <p className="ProjectBio">
                    {projectBio}
                </p>
            <img
                src={projectImg}
                className="img"
                alt={`${projectTitle} + "gif"`}
            />
            <p className="Links">
                {links}
            </p>
            <p className="ToolsLangs">
                {toolsLangs}
            </p>
        </div>
    );
};