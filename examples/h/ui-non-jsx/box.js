import { component } from './component.js';

export function Box(props, children) {
    return component({ tag: 'div', children, ...props });
}
