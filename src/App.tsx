import styles from './App.module.scss';
import logo from './assets/logo.svg';
import { NavBar } from './components/nav-bar/nav-bar';
import { IntroSection } from './components/intro-section/intro-section';
import { ExperienceSection } from './components/experience-section/experience-section';
import { SectionHeader } from './components/section-header/section-header';
import { AboutContent } from './components/about-content/about-content';

function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <main>
                <section id="intro" className={styles.IntroSectionDiv}>
                    <IntroSection />
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
                        {/* add here */}
                    </div>
                </section>
                <section id="contact">
                    <div className={styles['sectionDiv']}>
                        {/* add here */}
                    </div>
                </section>
            </main>

            <header className={styles['App-header']}>
                <img src={logo} className={styles['App-logo']} alt="logo" />
                <h1 className="ProjectTitle">In Production</h1>
            </header>
        </div>
    );
}

// add link to icons8 for credit https://icons8.com/license

export default App;
