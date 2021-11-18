 import u from '../../src/react-component.js';

export function Heading(props) {
    return u({
        tag: 'h1',
        defaultProps: {
            fontSize: '2rem',
            lineHeight: '2.5rem',
        },
        ...props,
    });
}
