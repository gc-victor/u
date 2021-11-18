export interface ComponentOptions {
    tag: string;
    attributes?: string[];
    props?: {
        tag?: string;
        children?: unknown;
        [key: string]: any;
    };
    defaultProps?: {
        [key: string]: any;
    };
    children?: unknown;
}
export interface JSXComponentOptions {
    tag: string;
    attributes?: string[];
    defaultProps?: {
        [key: string]: any;
    };
    [key: string]: any;
}
declare function component(options: ComponentOptions): () => unknown;
export default component;
export declare function Component(options: JSXComponentOptions): () => unknown;
