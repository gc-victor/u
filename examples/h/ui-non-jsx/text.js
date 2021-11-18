import { component } from './component.js';

export function Text(props, children) {
    return component({ tag: 'span', children, ...props });
}
