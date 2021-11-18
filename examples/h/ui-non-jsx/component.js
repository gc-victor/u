import u from '../../src/h-component.js';
import middleware from './middleware.js';

export function component({ props, children, ...rest }) {
    return u({ ...middleware(props, children), ...rest });
}
