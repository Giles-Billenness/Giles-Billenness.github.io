import styles from './App.module.scss';
// import logo from './assets/logo.svg';
import { NavBar } from './components/nav-bar/nav-bar';
import { IntroSection } from './components/intro-section/intro-section';
import { ExperienceSection } from './components/experience-section/experience-section';
import { SectionHeader } from './components/section-header/section-header';
import { AboutContent } from './components/about-content/about-content';
import { ContactContent } from './components/contact-content/contact-content';
import { ProjectsSection } from './components/projects-section/projects-section';

function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <main>
                <section id="intro">
                    <div className={styles['sectionDiv']}>
                        <IntroSection />
                    </div>
                </section>
                <section id="about">
                    <div className={styles['sectionDiv']}>
                        <SectionHeader sectionTitle="About me" />
                        <AboutContent />
                    </div>
                </section>
                <section id="experience">
                    <div className={styles['sectionDiv']}>
                        <SectionHeader sectionTitle="Experience" />
                        <ExperienceSection />
                    </div>
                </section>
                <section id="projects">
                    <div className={styles['sectionDiv']}>
                        <SectionHeader sectionTitle="Projects" />
                        <ProjectsSection />
                    </div>
                </section>
                <section id="contact">
                    <div className={styles['sectionDiv']}>
                        <SectionHeader sectionTitle="Contact me" />
                        <ContactContent />
                    </div>
                </section>
            </main>
        </div>
    );
}

// add link to icons8 for credit https://icons8.com/license

export default App;
