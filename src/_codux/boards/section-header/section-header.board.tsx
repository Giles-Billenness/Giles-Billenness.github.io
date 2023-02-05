import { createBoard } from '@wixc3/react-board';
import { SectionHeader } from '../../../components/section-header/section-header';

export default createBoard({
    name: 'SectionHeader',
    Board: () => <SectionHeader sectionTitle="Section title"/>,
    environmentProps: {
        canvasWidth: 512,
        canvasHeight: 659,
    },
});
