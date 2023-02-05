import styles from './experience-content.module.scss';
import classNames from 'classnames';

export interface ExperienceContentProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-experience-contents-and-templates
 */
export const ExperienceContent = ({ className, children = 'ExperienceContent' }: ExperienceContentProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
