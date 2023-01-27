import styles from './app-version-one.module.scss';
import classNames from 'classnames';
import { Title } from '../title/title';
import { ProjectCard } from '../project-card/project-card';

export interface AppVersionOneProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-app-version-ones-and-templates
 */
export const AppVersionOne = ({ className, children = 'AppVersionOne' }: AppVersionOneProps) => {
    return <div className={classNames(styles.root, className)}>
            <header className={styles['App-header']}>
                <Title TitleText='Project Timeline '></Title>
                <div className={styles['App-grid']}>
                    <ProjectCard projectTitle="Project title (Summer 2020)" projectBio="Bio about the project. What is is and why. Experimetned with x y z. Contributed to...." projectImg="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" links="This will contain links to the project" toolsLangs="This will contain images and names of langauges and tools used">
                    </ProjectCard>
                    <ProjectCard projectTitle="Project title (Summer 2020)" projectBio="Bio about the project. What is is and why. Experimetned with x y z. Contributed to...." projectImg="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" links="This will contain links to the project" toolsLangs="This will contain images and names of langauges and tools used">
                    </ProjectCard>
                </div>
            </header>
        </div>
};
