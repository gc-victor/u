 import u from '../../src/react-component.js';

// https://html.spec.whatwg.org/multipage/input.html#the-input-element
const attributes = [
    'accept',
    'alt',
    'autocomplete',
    'checked',
    'dirname',
    'disabled',
    'form',
    'formaction',
    'formenctype',
    'formmethod',
    'formnovalidate',
    'formtarget',
    // 'height',
    'list',
    'max',
    'maxlength',
    'min',
    'minlength',
    'multiple',
    'name',
    'pattern',
    'placeholder',
    'readonly',
    'required',
    'size',
    'src',
    'step',
    'type',
    'value',
    // 'width',
];

export function Input(props) {
    return u({
        tag: 'input',
        defaultProps: {},
        attributes,
        ...props,
    });
}
