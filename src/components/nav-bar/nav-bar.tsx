import styles from './nav-bar.module.scss';
// import classNames from 'classnames';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { useRef } from 'react';
import { ReactComponent as Logo } from "../../assets/g-alphabet-icon.svg";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CV from "../../assets/Giles_Billenness_CV.pdf";
import GithubSVG from '../../assets/github-mark-white.svg';
import LinkedInSVG from '../../assets/linkedin.svg';
export interface NavBarProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-nav-bars-and-templates
 */
export const NavBar = ({ className, children = 'NavBar' }: NavBarProps) => {
    return (
        <>
            <Navbar sticky="top" key='md' expand='md' className={styles.Navbar}>
            <Container fluid className={styles.Container}>
                <Navbar.Brand href="/">
                    <Logo className="logo"/>
                </Navbar.Brand>
                    <div className={styles.socials}>
                        <a href="https://github.com/Giles-Billenness">
                            <img src={GithubSVG} alt="Github Icon" className={styles.GithubIcon}/>
                        </a>
                        <a href="https://www.linkedin.com/in/giles-billenness/">
                            <img src={LinkedInSVG} alt="LinkedIn Icon" className={styles.GithubIcon}/>
                        </a>
                    </div>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className={styles.navbartoggler}/>
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-md`}
                aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                placement="end"
                className={styles.Offcanvas}
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                        <Logo className="logo"/>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/#about" className={styles.NavLink + ' ' + styles.NavBarAbout}>About</Nav.Link>
                    <Nav.Link href="/#experience" className={styles.NavLink + ' ' + styles.NavBarExp}>Experience</Nav.Link>
                    <Nav.Link href="/#projects" className={styles.NavLink + ' ' + styles.NavBarProj}>Projects</Nav.Link>
                    <Nav.Link href="/#contact" className={styles.NavLink + ' ' + styles.NavBarContact}>Contact</Nav.Link>
                    </Nav>
                        <Button  variant="outline-success" href={CV} className={styles.CVbtn}>CV</Button>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        </>
    );
};
