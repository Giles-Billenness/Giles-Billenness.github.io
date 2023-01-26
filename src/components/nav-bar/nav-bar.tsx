import styles from './nav-bar.module.scss';
import classNames from 'classnames';

export interface NavBarProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-nav-bars-and-templates
 */
export const NavBar = ({ className, children = 'NavBar' }: NavBarProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
