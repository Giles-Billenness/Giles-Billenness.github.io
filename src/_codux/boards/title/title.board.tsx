import { createBoard } from '@wixc3/react-board';
import { Title } from '../../../components/title/title';

export default createBoard({
    name: 'Title',
    Board: () => <Title TitleText="Project Timeline" />,
    environmentProps: {
        canvasWidth: 412,
        canvasHeight: 1045,
    },
});
