 import u from '../../src/react-component.js';

export function Paragraph(props) {
    return u({
        tag: 'p',
        defaultProps: {},
        ...props,
    });
}
