import * as React from 'react';
import ReactDOM from 'react-dom';
import { Heading } from './ui/heading';
import { Box } from './ui/box';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Text } from './ui/text';
import { Flex } from './ui/flex';

let count = 0;
let input = React.createRef();

const increment = () => {
    count = count + 1;
    input.current.value = count;
};
const decrement = () => {
    count = count - 1;
    input.current.value = count;
};
const add = (ev) => {
    count = Number(ev.target.value);
};

const FancyInput = React.forwardRef((props, ref) => {
    return <Input forwardedRef={ref} {...props} />;
});

const CounterButton = ({ children, ...props }) => (
    <Button
        background="#eee"
        border="0"
        borderRadius="4px"
        color="black"
        padding="8px 24px"
        style={{
            ':hover': {
                background: 'black',
                color: 'white',
            },
            ':focus': {
                background: 'black',
                color: 'white',
            },
        }}
        {...props}
    >
        {children}
    </Button>
);

const Counter = () => {
    return (
        <Box>
            <Heading>Counter - React</Heading>
            <Flex>
                <CounterButton onClick={increment}>
                    <Text>+</Text>
                </CounterButton>
                <FancyInput
                    borderRadius="4px"
                    border="1px solid black"
                    margin="0 4px"
                    padding="4px"
                    ref={input}
                    onInput={add}
                    name="input"
                    type="number"
                    value={count}
                />
                <CounterButton onClick={decrement}>
                    <Text>-</Text>
                </CounterButton>
            </Flex>
        </Box>
    );
};

const app = document.getElementById('app');

ReactDOM.render(<Counter />, app);
