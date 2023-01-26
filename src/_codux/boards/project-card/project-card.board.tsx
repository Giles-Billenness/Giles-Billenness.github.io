import { createBoard } from '@wixc3/react-board';
import { ProjectCard } from '../../../components/project-card/project-card';

export default createBoard({
    name: 'ProjectCard',
    Board: () => (
        <ProjectCard projectTitle="Project title (Summer 2020)" projectBio="Bio about the project. What is is and why. Experimetned with x y z. Contributed to...." projectImg="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" links="This will contain links to the project" toolsLangs="This will contain images and names of langauges and tools used">

        </ProjectCard>
    ),
    environmentProps: {
        canvasWidth: 430,
        canvasHeight: 670,
    },
});
