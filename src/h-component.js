import h from './h-shim.js';
import { updateProps, styles } from './update-props.js';

export { styles };
export default function u({ attributes, children, tag, defaultProps = {}, props = {}, ...rest }) {
    const newProps = { ...props, ...rest };
    return h(
        newProps.tag || tag,
        updateProps({ attributes, props: { ...defaultProps, ...newProps } }),
        [].concat.apply([], typeof children === 'string' ? [children] : children)
    );
}
export const U = u;
