import styles from './App.module.scss';
import { Title } from './components/title/title';
import { ProjectCard } from './components/project-card/project-card';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <Title></Title>
                <div className={styles['App-grid']}>
                    <ProjectCard projectTitle="Project title (Summer 2020)" projectBio="Bio about the project. What is is and why. Experimetned with x y z. Contributed to...." projectImg="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" links="This will contain links to the project" toolsLangs="This will contain images and names of langauges and tools used">
                    </ProjectCard>
                    <ProjectCard projectTitle="Project title (Summer 2020)" projectBio="Bio about the project. What is is and why. Experimetned with x y z. Contributed to...." projectImg="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" links="This will contain links to the project" toolsLangs="This will contain images and names of langauges and tools used">
                    </ProjectCard>
                </div>
            </header>
        </div>
    );
}

export default App;
