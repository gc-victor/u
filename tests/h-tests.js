import { expect, test as t, window } from 't-t';
import jsdom from 'jsdom';
import hComponent, { styles } from '../src/h-component';
import { Fragment } from '../src/h-shim';

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

test('should create a div with the proper class and children', () => {
    expect(hComponent({ tag: 'div', props: { color: 'blue' }, children: ['Test'] }).outerHTML).toBe(
        '<div class="c3183262666">Test</div>'
    );
});

test('should exclude the color attribute from the class creation', () => {
    expect(
        hComponent({
            attributes: ['color'],
            tag: 'div',
            props: { color: 'blue' },
            children: ['Test'],
        }).outerHTML
    ).toBe('<div color="blue">Test</div>');
});

test('should add the defaultProps', () => {
    expect(
        hComponent({
            defaultProps: { color: 'blue' },
            tag: 'div',
            props: {},
            children: ['Test'],
        }).outerHTML
    ).toBe('<div class="c3183262666">Test</div>');
});

test('should overwrite the defaultProps with the props', () => {
    expect(
        hComponent({
            defaultProps: { color: 'red' },
            tag: 'div',
            props: { color: 'blue' },
            children: ['Test'],
        }).outerHTML
    ).toBe('<div class="c3183262666">Test</div>');
});

test('should create a class using style props', () => {
    expect(
        hComponent({
            tag: 'div',
            props: {
                style: { color: 'blue' }
            },
            children: ['Test'],
        }).outerHTML
    ).toBe('<div class="c3183262666">Test</div>');
});

test('should no set key as class', () => {
    expect(
        hComponent({
            tag: 'div',
            props: {
                key: 'key',
                style: { color: 'blue' }
            },
            children: ['Test'],
        }).outerHTML
    ).toBe('<div class="c3183262666">Test</div>');
});

test('should no set event as class', () => {
    expect(
        hComponent({
            tag: 'div',
            props: {
                onClick: () => {},
                style: { color: 'blue' }
            },
            children: ['Test'],
        }).outerHTML
    ).toBe('<div class="c3183262666">Test</div>');
});

test('should no set dataset as class', () => {
    expect(
        hComponent({
            tag: 'div',
            props: {
                'data-test': 'test',
                style: { color: 'blue' }
            },
            children: ['Test'],
        }).outerHTML
    ).toBe('<div data-test="test" class="c3183262666">Test</div>');
});

test('should no set aria as class', () => {
    expect(
        hComponent({
            tag: 'div',
            props: {
                'aria-test': 'test',
                style: { color: 'blue' }
            },
            children: ['Test'],
        }).outerHTML
    ).toBe('<div aria-test="test" class="c3183262666">Test</div>');
});

test('should allow Fragment', () => {
    expect(
        hComponent({
            tag: 'div',
            props: {
                'aria-test': 'test',
                style: { color: 'blue' }
            },
            children: ['Test', Fragment({ children: [
                    hComponent({
                        tag: 'span',
                        children: ['Test 1'],
                    }),
                    hComponent({
                        tag: 'span',
                        children: ['Test 2'],
                    })
                ] })],
        }).outerHTML
    ).toBe('<div aria-test="test" class="c3183262666">Test<span>Test 1</span><span>Test 2</span></div>');
});

test('should exclude the global attributes from the class creation', () => {
    expect(
        hComponent({
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
                translate: 0
            },
            children: ['Test'],
        }).outerHTML
    ).toBe(`<div accesskey="0" autocapitalize="0" autofocus="0" contenteditable="0" dir="0" draggable="0" enterkeyhint="0" hidden="0" id="0" inputmode="0" is="0" itemid="0" itemprop="0" itemref="0" itemscope="0" itemtype="0" lang="0" nonce="0" part="0" role="0" slot="0" spellcheck="0" tabindex="0" title="0" translate="0">Test</div>`);
});

// Note if is SSR
if (!process.env.TEST) {
    test('should extract the styles', () => {
       expect(styles()).toBe('.c3183262666{color:blue}');
    });
}

