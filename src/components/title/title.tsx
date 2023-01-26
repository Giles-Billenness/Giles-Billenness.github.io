import styles from './title.module.scss';
import classNames from 'classnames';

export interface TitleProps {
    className?: string;
    children?: React.ReactNode;
    TitleText: string;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-titles-and-templates
 */
export const Title = ({ className, TitleText }: TitleProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>{TitleText}</h1>
        </div>
    );
};
