import { createBoard } from '@wixc3/react-board';
import { AboutContent } from '../../../components/about-content/about-content';

export default createBoard({
    name: 'AboutContent',
    Board: () => <AboutContent />,
    environmentProps: {
        canvasHeight: 663,
        canvasWidth: 1199,
        windowWidth: 1800,
        windowHeight: 737,
    },
});
