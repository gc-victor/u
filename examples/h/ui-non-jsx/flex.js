import { component } from './component.js';

export function Flex(props, children) {
    return component({
        tag: 'div',
        children,
        defaultProps: { display: 'flex' },
        ...props,
    });
}
