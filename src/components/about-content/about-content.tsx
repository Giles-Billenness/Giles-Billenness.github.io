import styles from './about-content.module.scss';
import classNames from 'classnames';
import profileImg from '../../assets/profileImg.jpg';


export interface AboutContentProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-about-contents-and-templates
 */
export const AboutContent = ({ className, children = 'AboutContent' }: AboutContentProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['divGrid']}>
                <div className={styles['paragraphContent']}>
                    <p>
                        Hello! My name is Giles and enjoy working with and developing projects that involve
                        automation, self-learning, and self-governance. I’ve been working with computers
                        since my family got a computer back in the Windows 95 era. Ever since, developing my
                        understanding of complex systems and my ability to use them to solve problems,
                        building my own computers and programs along the way.
                    </p>
                    <p>
                        Fast-forward to today, and I’ve had the privilege of being the president of the
                        Computing society at The University of Surrey, graduated top of my class of 190
                        students, and worked at IBM during my placement year gaining experience in DevOps,
                        automation testing and full stack development.
                    </p>
                    <p>
                        My main focus these days is helping develop IBM Z features in IBM cloud serving a
                        wide variety of clients and improving my knowledge and ability to apply machine
                        learning systems to complex problems.
                    </p>
                    <p>I’ve been working with recently with:</p>
                    <ul className={styles['listContent']}>
                        <li>React</li>
                        <li>Python</li>
                        <li>PyTorch</li>
                        <li>Containers</li>
                        <li>IBM cloud</li>
                        <li>Z mainframes</li>
                    </ul>
                </div>
                <div className={styles['imageContent']}>
                    <img
                        className={styles['imageContent']}
                        src={profileImg}
                        alt="Headshot"
                    />
                </div>
            </div>
        </div>
    );
};
