import { createBoard } from '@wixc3/react-board';
import { ExperienceSection } from '../../../components/experience-section/experience-section';

export default createBoard({
    name: 'ExperienceContent',
    Board: () => <ExperienceSection />,
    environmentProps: {
        canvasWidth: 592,
        canvasHeight: 642,
    },
});
