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
export interface NavBarProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-nav-bars-and-templates
 */
export const NavBar = ({ className, children = 'NavBar' }: NavBarProps) => {
    // const navRef = useRef<HTMLInputElement>(null);
    // const showNavBar = () => {
    //     if (navRef.current) {
    //         navRef.current.classList.toggle('responsive_nav');
    //     }
    // };

    return (
        // <div className={classNames(styles.root, className)}>
        //     <header>
        //         <h3>
        //             <Logo className="logo"/>
        //             <nav className="nav-links" ref={navRef}>
        //                 <a href="/#about">./ About</a>
        //                 <a href="/#experience">./ Experience</a>
        //                 <a href="/#projects">./ Projects</a>
        //                 <a href="/#contact">./ Contact</a>
        //                 <button className="nav-btn nav-close-btn" onClick={showNavBar}>
        //                     <FaTimes />
        //                 </button>
        //             </nav>
        //             <button className="nav-btn" onClick={showNavBar}>
        //                 <FaBars />
        //             </button>
        //         </h3>
        //     </header>
        // </div>
        <>
            <Navbar sticky="top" key='md' expand='md' className={styles.Navbar}>
            <Container fluid className={styles.Container}>
                <Navbar.Brand href="/">
                    <Logo className="logo"/>
                </Navbar.Brand>
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
                    <Nav.Link href="/#about" className={styles.NavLink}>About</Nav.Link>
                    <Nav.Link href="/#experience" className={styles.NavLink}>Experience</Nav.Link>
                    <Nav.Link href="/#projects" className={styles.NavLink}>Projects</Nav.Link>
                    <Nav.Link href="/#contact" className={styles.NavLink}>Contact</Nav.Link>
                    </Nav>
                    <Button variant="outline-success" className={styles.CVbtn}>CV</Button>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        </>
    );
};
