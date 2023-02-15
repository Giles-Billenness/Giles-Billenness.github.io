import styles from './section-header.module.scss';
// import classNames from 'classnames';

export interface SectionHeaderProps {
    className?: string;
    children?: React.ReactNode;
    sectionTitle: string;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-section-headers-and-templates
 */
export const SectionHeader = ({ className, children = 'SectionHeader' , sectionTitle}: SectionHeaderProps) => {
    return (
        <div className={styles['TitleDiv']}>
            <h2 className={styles['SectionTitle']}>{sectionTitle}</h2>
        </div>
    );
};
