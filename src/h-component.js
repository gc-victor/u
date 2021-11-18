import h from './h-shim.js';
import { updateProps, styles } from './update-props.js';

export { styles };
export default function u({ attributes, children, tag, defaultProps = {}, ...rest }) {
    const props = rest || {};
    return h(
        props.tag || tag,
        updateProps({ attributes, props: { ...defaultProps, ...props } }),
        children || props.children
    );
}
export const U = u;
