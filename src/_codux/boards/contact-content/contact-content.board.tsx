import { createBoard } from '@wixc3/react-board';
import { ContactContent } from '../../../components/contact-content/contact-content';

export default createBoard({
    name: 'ContactContent',
    Board: () => <ContactContent />,
    environmentProps: {
        windowWidth: 1788,
        windowHeight: 756,
        canvasHeight: 761,
        canvasWidth: 994,
    },
});
