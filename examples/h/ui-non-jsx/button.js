import { component } from './component.js';

const attributes = [
    'disabled',
    'form',
    'formaction',
    'formenctype',
    'formmethod',
    'formnovalidate',
    'formtarget',
    'name',
    'type',
    'value',
];

export function Button(props, children) {
    return component({
        tag: 'button',
        children,
        attributes,
        defaultProps: {
            border: 0,
        },
        ...props,
    });
}
