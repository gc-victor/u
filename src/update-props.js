import { c, styles } from 'c-c';

export { styles };

const globalAttributes = [
    'accesskey',
    'autocapitalize',
    'autofocus',
    'contenteditable',
    'dir',
    'draggable',
    'enterkeyhint',
    'hidden',
    'id',
    'inputmode',
    'is',
    'itemid',
    'itemprop',
    'itemref',
    'itemscope',
    'itemtype',
    'lang',
    'nonce',
    'part',
    'role',
    'slot',
    'spellcheck',
    // 'style',
    'tabindex',
    'title',
    'translate'
];

export function updateProps({ props = {}, attributes = [] }) {
    let i = 0;
    const attr = [...attributes, ...globalAttributes];
    const { tag, ref, children, className: hasPropsClassName, style: hasStyle, ...rest } = props || {};
    const keys = Object.keys(rest);
    const length = keys.length;
    const acc = {};
    while (i < length) {
        const key = keys[i];
        if (attr.includes(key) || /^on|^data-|^data[A-Z0-9]+|^aria-|^aria[A-Z0-9]+|^key$/.test(key)) {
            acc.attributes = acc.attributes || {};
            acc.attributes[keys[i]] = rest[key];
        } else {
            acc.styles = acc.styles || {};
            acc.styles[key] = rest[key];
        }
        i++;
    }
    const propsClassName = props.className;
    const styles = acc.styles;
    const className =
        hasStyle || hasPropsClassName || styles
            ? {
                  className:
                      c({
                          ...(hasStyle ? props.style : {}),
                          ...(styles || {}),
                      }) + (propsClassName ? (hasStyle || styles ? ' ' : '') + propsClassName : ''),
              }
            : {};
    return {
        ...(acc.attributes || {}),
        ...className,
        ...(ref ? { ref } : {})
    };
}
