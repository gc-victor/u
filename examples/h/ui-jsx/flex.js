import u from '../../src/h-component.js';

export function Flex(props) {
    return u({
        tag: 'div',
        defaultProps: { display: 'flex' },
        ...props,
    });
}
