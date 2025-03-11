import styles from './intro-section.module.scss';
import classNames from 'classnames';
import Typewriter from 'typewriter-effect';

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
            <h3 className={styles['Intro-subheading']}>
                I build things that&nbsp;<Typewriter options={{strings: ['scale', 'learn', 'evolve'], autoStart: true,loop: true, delay:200}}/>
            </h3>
            <p className={styles['Intro-bodyText']}>
                I'm a Machine Learning Researcher & Software Developer, formerly @ IBM, and former president of the computing society @ University of Surrey. I'm also an avid cook!<br></br>
                👁️ 🤖 🏥 Currently helping develop transformer models for medical image analysis and for other domains.<br></br>
                📚 Always eager to learn new tools, architectures and improve my workflow.<br></br>
                🥅 Current Goals: Contribute more to open-source projects and stay updated with the latest industry practices.
            </p>
        </div>
    );
};
