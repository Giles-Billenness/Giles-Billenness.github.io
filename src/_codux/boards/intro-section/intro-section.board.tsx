import { createBoard } from '@wixc3/react-board';
import { IntroSection } from '../../../components/intro-section/intro-section';

export default createBoard({
    name: 'IntroSection',
    Board: () => <IntroSection />,
    environmentProps: {
        windowWidth: 1380,
        windowHeight: 793,
    },
});
