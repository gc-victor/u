 import u from '../../src/react-component.js';

export function Text(props) {
    return u({
        tag: 'span',
        defaultProps: {},
        ...props,
    });
}
