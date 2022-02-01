import hh from 'h';

export default function h(type, props, children) {
    if (typeof type === 'function') {
        return type({ children: [].slice.call(arguments, 2), ...(props || {}) });
    }
    return hh(type, props || {}, children);
}

function Fragment(props) {
    return props.children;
}

export { Fragment, h };
