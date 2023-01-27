import { createBoard } from '@wixc3/react-board';
import { AppVersionOne } from '../../../components/app-version-one/app-version-one';

export default createBoard({
    name: 'AppVersionOne',
    Board: () => <AppVersionOne />
});
