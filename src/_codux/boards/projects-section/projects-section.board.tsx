import { createBoard } from '@wixc3/react-board';
import { ProjectsSection } from '../../../components/projects-section/projects-section';

export default createBoard({
    name: 'ProjectsSection',
    Board: () => <ProjectsSection />
});
