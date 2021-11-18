import hh from 'h';

const fragment = '__F__';
export default function h(type, props, children) {
    if (typeof type === 'function') {
        return type({ children: [].slice.call(arguments, 2), ...(props || {}) });
    }
    return type !== fragment ? hh(type, props || {}, children) : [].slice.call(arguments, 2);
}
export { fragment, h };
