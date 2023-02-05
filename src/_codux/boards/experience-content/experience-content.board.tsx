import { createBoard } from '@wixc3/react-board';
import { ExperienceContent } from '../../../components/experience-content/experience-content';

export default createBoard({
    name: 'ExperienceContent',
    Board: () => <ExperienceContent />,
    environmentProps: {
        canvasHeight: 985,
        windowWidth: 1904,
        windowHeight: 887,
        canvasWidth: 1392,
    },
});
