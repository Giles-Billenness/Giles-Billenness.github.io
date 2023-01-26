import { createBoard } from '@wixc3/react-board';
import { NavBar } from '../../../components/nav-bar/nav-bar';

export default createBoard({
    name: 'NavBar',
    Board: () => <NavBar />,
    environmentProps: {
        canvasWidth: 1043,
        canvasHeight: 685,
    },
});
