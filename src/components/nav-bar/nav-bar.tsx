import styles from './nav-bar.module.scss';
import variables from './nav-bar.module.scss';
import classNames from 'classnames';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import { ReactComponent as Logo } from "../../assets/g-alphabet-icon.svg";

export interface NavBarProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-nav-bars-and-templates
 */
export const NavBar = ({ className, children = 'NavBar' }: NavBarProps) => {
    const navRef = useRef<HTMLInputElement>(null);

    const showNavBar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle('responsive_nav');
        }
    };

    return (
        <div className={classNames(styles.root, className)}>
            <header>
                <h3>
                    <Logo className="logo" style={
                        { fill: `${variables.secondaryColor};`}
                    }
                        />
                    <nav className="ml-auto" ref={navRef}>
                        <a href="/#about">./ About</a>
                        <a href="/#experience">./ Experience</a>
                        <a href="/#projects">./ Projects</a>
                        <a href="/#contact">./ Contact</a>
                        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                            <FaTimes />
                        </button>
                    </nav>
                    <button className="nav-btn" onClick={showNavBar}>
                        <FaBars />
                    </button>
                </h3>
            </header>
        </div>
    );
};
