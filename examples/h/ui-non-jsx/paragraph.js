import { component } from './component.js';

export function Paragraph(props, children) {
    return component({ tag: 'button', children, ...props });
}
