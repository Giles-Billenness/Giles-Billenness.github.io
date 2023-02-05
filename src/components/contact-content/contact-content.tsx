import styles from './contact-content.module.scss';
import classNames from 'classnames';
import Button from 'react-bootstrap/Button';

export interface ContactContentProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-contact-contents-and-templates
 */
export const ContactContent = ({ className, children = 'ContactContent' }: ContactContentProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['divGrid']}>
                <div className={styles['paragraphContent']}>
                    <h2>
                    So what’s next?
                    </h2>
                    <p>
                    Have an exciting opportunity or idea, let me know!
                    </p>
                    <p>
                    Feel free to contact me on any of my socials or via email.
                    </p>
                    <div className={styles['emailbtnDiv']}>
                        <Button variant="outline-success" className={styles['emailbtn']} href="mailto:giles.billenness@blueyonder.co.uk" size="lg">Say Hi!</Button>
                    </div>
                </div>
                <div className={styles['imageContent']}>
                    <h1>?</h1>
                </div>
            </div>
        </div>
    );
};
