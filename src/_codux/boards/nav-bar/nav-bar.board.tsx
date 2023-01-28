import { createBoard } from '@wixc3/react-board';
import { NavBar } from '../../../components/nav-bar/nav-bar';

export default createBoard({
    name: 'NavBar',
    Board: () => <NavBar />,
    environmentProps: {
        canvasWidth: 1190,
        canvasHeight: 685,
        windowWidth: 1050,
    },
});
