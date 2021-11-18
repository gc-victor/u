import u from '../../src/h-component.js';

export function Text(props) {
    return u({ tag: 'span', ...props });
}
