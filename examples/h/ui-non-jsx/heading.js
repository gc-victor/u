import { component } from './component.js';

export function Heading(props, children) {
    return component({
        tag: 'h1',
        children,
        defaultProps: {
            fontSize: '2rem',
            lineHeight: '2.5rem',
        },
        ...props,
    });
}
