import { React } from './react-shim.js';
import { updateProps, styles } from './update-props.js';

export { styles };
export default function u({ attributes, children, tag, defaultProps = {}, props = {} }) {
    const forwardedRef = props.forwardedRef;
    const ref = props.forwardedRef ? { ref: forwardedRef } : {};
    return React.createElement(
        props.tag || tag,
        updateProps({ attributes, props: { ...defaultProps, ...props, ...ref } }),
        children || props.children
    );
}
export const U = u;
