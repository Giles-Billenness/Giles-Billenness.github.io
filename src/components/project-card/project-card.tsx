import styles from './project-card.module.scss';
import classNames from 'classnames';
import Card from 'react-bootstrap/Card';

export interface ProjectCardProps {
    className?: string;
    children?: React.ReactNode;
    projectTitle: string;
    projectBio: string;
    projectImg: string;
    links: string;
    toolsLangs: string;
}

// function that takes a string with  comma sepearted items and returns the <li> form
function ToolsLangsList(toolsLangs: string) {
    var toolsLangsList = toolsLangs.split(",");
    var toolsLangsListItems = toolsLangsList.map((item) => <li>{item}</li>);
    return toolsLangsListItems;
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
            <div className={styles['divGrid']}>
                <div className={styles['divGridText']}>
                    <h1 className={styles["ProjectTitle"]}>{projectTitle}</h1>
                        <Card className={styles['ProjectBio']}>
                            <Card.Body>{projectBio}</Card.Body>
                        </Card>
                    <div className={styles["ProjectCardFooterItems"]}>
                        <div>
                            <ul className={styles["ToolsLangs"]}>
                                {ToolsLangsList(toolsLangs)}
                            </ul>
                        </div>
                        <div>
                            <p className={styles["Links"]}>
                                <a href={links}>GH</a>
                            </p>
                        </div>
                    </div>

                </div>
                <div className={styles['divGridImage']}>
                    <img
                        src={projectImg}
                        className="img"
                        alt={`${projectTitle} gif`}
                    />
                </div>
            </div>
        </div>
    );
};

