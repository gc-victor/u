import * as React from 'react';
import { expect, test as t, window } from 't-t';
import jsdom from 'jsdom';
import reactComponent from '../src/react-component';

const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><body><div id="app"><p>Hello world!</p></div></body>`, {
    url: 'https://u.u/',
});
window('window', dom.window);
window('document', dom.window.document);
global.Node = dom.window.Node;

const test = t;
// const only = t;
// const test = () => {};

const publicObject = ({ $$typeof, _owner, _store, ...rest }) => rest;
const component = (obj) => publicObject(reactComponent(obj));

test('should create a div with the proper class and children', () => {
    expect(component({ tag: 'div', props: { color: 'blue' }, children: ['Test'] })).toBe({
        key: null,
        props: {
            children: ['Test'],
            className: 'c3183262666',
        },
        ref: null,
        type: 'div',
    });
});

test('should exclude the color attribute from the class creation', () => {
    expect(
        component({
            attributes: ['color'],
            tag: 'div',
            props: { color: 'blue' },
            children: ['Test'],
        })
    ).toBe({
        key: null,
        props: {
            children: ['Test'],
            color: 'blue',
        },
        ref: null,
        type: 'div',
    });
});

test('should add the defaultProps', () => {
    expect(
        component({
            defaultProps: { color: 'blue' },
            tag: 'div',
            props: {},
            children: ['Test'],
        })
    ).toBe({
        key: null,
        props: {
            children: ['Test'],
            className: 'c3183262666',
        },
        ref: null,
        type: 'div',
    });
});

test('should overwrite the defaultProps with the props', () => {
    expect(
        component({
            defaultProps: { color: 'red' },
            tag: 'div',
            props: { color: 'blue' },
            children: ['Test'],
        })
    ).toBe({
        key: null,
        props: {
            children: ['Test'],
            className: 'c3183262666',
        },
        ref: null,
        type: 'div',
    });
});

test('should create a class using style props', () => {
    expect(
        component({
            tag: 'div',
            props: {
                style: { color: 'blue' },
            },
            children: ['Test'],
        })
    ).toBe({
        key: null,
        props: {
            children: ['Test'],
            className: 'c3183262666',
        },
        ref: null,
        type: 'div',
    });
});

test('should no set ref as class', () => {
    const ref = React.createRef();

    expect(
        component({
            tag: 'div',
            props: {
                ref,
                style: { color: 'blue' },
            },
            children: ['Test'],
        })
    ).toBe({
        key: null,
        props: {
            children: ['Test'],
            className: 'c3183262666',
        },
        ref: {
            current: null
        },
        type: 'div',
    });
});

test('should no set event as class', () => {
    const onClick = () => {};

    expect(
        component({
            tag: 'div',
            props: {
                onClick,
                style: { color: 'blue' },
            },
            children: ['Test'],
        })
    ).toBe({
        key: null,
        props: {
            children: ['Test'],
            className: 'c3183262666',
            onClick,
        },
        ref: null,
        type: 'div',
    });
});

test('should no set key as class', () => {
    expect(
        component({
            tag: 'div',
            props: {
                key: 'key',
                style: { color: 'blue' },
            },
            children: ['Test'],
        })
    ).toBe({
        key: 'key',
        props: {
            children: ['Test'],
            className: 'c3183262666',
        },
        ref: null,
        type: 'div',
    });
});

test('should no set dataset as class', () => {
    expect(
        component({
            tag: 'div',
            props: {
                dataTest: 'test',
                style: { color: 'blue' },
            },
            children: ['Test'],
        })
    ).toBe({
        key: null,
        props: {
            children: ['Test'],
            className: 'c3183262666',
            dataTest: 'test',
        },
        ref: null,
        type: 'div',
    });
});

test('should no set aria as class', () => {
    expect(
        component({
            tag: 'div',
            props: {
                ariaTest: 'test',
                style: { color: 'blue' },
            },
            children: ['Test'],
        })
    ).toBe({
        key: null,
        props: {
            children: ['Test'],
            className: 'c3183262666',
            ariaTest: 'test',
        },
        ref: null,
        type: 'div',
    });
});

test('should exclude the global attributes from the class creation', () => {
    expect(
        component({
            tag: 'div',
            props: {
                accesskey: 0,
                autocapitalize: 0,
                autofocus: 0,
                contenteditable: 0,
                dir: 0,
                draggable: 0,
                enterkeyhint: 0,
                hidden: 0,
                id: 0,
                inputmode: 0,
                is: 0,
                itemid: 0,
                itemprop: 0,
                itemref: 0,
                itemscope: 0,
                itemtype: 0,
                lang: 0,
                nonce: 0,
                part: 0,
                role: 0,
                slot: 0,
                spellcheck: 0,
                tabindex: 0,
                title: 0,
                translate: 0,
            },
            children: ['Test'],
        })
    ).toBe({
        key: null,
        props: {
            accesskey: 0,
            autocapitalize: 0,
            autofocus: 0,
            children: ['Test'],
            contenteditable: 0,
            dir: 0,
            draggable: 0,
            enterkeyhint: 0,
            hidden: 0,
            id: 0,
            inputmode: 0,
            is: 0,
            itemid: 0,
            itemprop: 0,
            itemref: 0,
            itemscope: 0,
            itemtype: 0,
            lang: 0,
            nonce: 0,
            part: 0,
            role: 0,
            slot: 0,
            spellcheck: 0,
            tabindex: 0,
            title: 0,
            translate: 0,
        },
        ref: null,
        type: 'div',
    });
});
