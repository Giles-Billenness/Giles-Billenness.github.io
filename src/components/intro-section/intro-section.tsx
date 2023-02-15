import styles from './intro-section.module.scss';
import classNames from 'classnames';

export interface IntroSectionProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-intro-sections-and-templates
 */
export const IntroSection = ({ className, children = 'IntroSection' }: IntroSectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles['Intro-greeting']}>Hello, I'm</h1>
            <h2 className={styles['Intro-name']}>Giles Billenness ‍‍👨‍💻</h2>
            <h3 className={styles['Intro-subheading']}>I build things that scale</h3>
            <p className={styles['Intro-bodyText']}>
                I'm a Software Developer @ IBM, former president of the computing society @ University of Surrey and avid cook!<br></br>
                👁️ 🐝 Ⓜ️ Currently developing Z features in IBM cloud<br></br>
                📚 And Im trying to learn a bit of everything<br></br>
                🥅 Current Goals: Contribute more to Open Source projects & learn more about bleeding edge industry practices
            </p>
        </div>
    );
};
