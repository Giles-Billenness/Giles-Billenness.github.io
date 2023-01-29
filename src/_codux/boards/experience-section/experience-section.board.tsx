import { createBoard } from '@wixc3/react-board';
import { ExperienceSection } from '../../../components/experience-section/experience-section';

export default createBoard({
    name: 'ExperienceSection',
    Board: () => <ExperienceSection />
});
