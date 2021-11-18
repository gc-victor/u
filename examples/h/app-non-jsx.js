import { Button } from './ui-non-jsx/button.js';
import { Heading } from './ui-non-jsx/heading.js';
import { Input } from './ui-non-jsx/input.js';
import { Box } from './ui-non-jsx/box.js';
import { Flex } from './ui-non-jsx/flex.js';

let count = 0;
let input;

const app = document.getElementById('app');

const increment = () => {
    count = count + 1;
    input.value = count;
};
const decrement = () => {
    count = count - 1;
    input.value = count;
};
const add = (ev) => {
    count = Number(ev.target.value);
};

const CounterButton = (props = {}, children) =>
    Button(
        {
            background: '#eee',
            border: 0,
            borderRadius: '4px',
            color: 'black',
            padding: '8px 24px',
            style: {
                ':hover': {
                    background: 'black',
                    color: 'white',
                },
                ':focus': {
                    background: 'black',
                    color: 'white',
                },
            },
            ...props,
        },
        children
    );

const Counter = () =>
    Box({ id: 'app' }, [
        Heading({}, 'Counter - H'),
        Flex({}, [
            CounterButton({ onClick: increment }, ['+']),
            Input({
                borderRadius: '4px',
                border: '1px solid black',
                margin: '0 4px',
                padding: '4px',
                name: 'input',
                type: 'number',
                value: count,
                onInput: add,
                ref: (el) => (input = el),
            }),
            CounterButton({ onClick: decrement }, ['-']),
        ]),
    ]);

app.parentNode.replaceChild(Counter(), app);
