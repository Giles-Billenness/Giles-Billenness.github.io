import styles from './title.module.scss';
import classNames from 'classnames';

export interface TitleProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-titles-and-templates
 */
export const Title = ({className }: TitleProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};
