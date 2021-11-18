import { U } from '../../src/react-component.js';

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

export function Button(props) {
    return <U tag="button" attributes={attributes} { ...props } />;
}
