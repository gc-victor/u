export default function middleware(first, second) {
    const isObject = {}.toString.call(first) === '[object Object]';
    const props = isObject ? first : {};
    const children = isObject || first === undefined ? second : first;

    return { props, children };
}
