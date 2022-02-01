import { Box } from './ui-jsx/box';
import { Heading } from './ui-jsx/heading';
import { Text } from './ui-jsx/text';
import { Flex } from './ui-jsx/flex';
import { Button } from './ui-jsx/button';
import { Input } from './ui-jsx/input';

let count = 0;
let input;

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

function CounterButton(props) {
    console.log({ props });

    return (
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
        />
    );
}

const Counter = () => (
    <Box id="app">
        <Heading>Counter - H/JSX</Heading>
        <Flex>
            <CounterButton onClick={increment}>
                <Text>+</Text>
            </CounterButton>
            <Input
                borderRadius="4px"
                border="1px solid black"
                margin="0 4px"
                padding="4px"
                ref={(el) => (input = el)}
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

const app = document.getElementById('app');
app.parentNode.replaceChild(Counter(), app);
