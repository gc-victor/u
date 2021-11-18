 import u from '../../src/react-component.js';

export function Flex(props) {
    return u({
        tag: 'div',
        defaultProps: { display: 'flex' },
        ...props,
    });
}
