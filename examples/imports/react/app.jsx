import ReactDOM from 'react-dom';
import component from 'u/react';

function Box(props) {
    return component({ tag: 'div', ...props });
}

function App() {
    return (
        <Box id="app" background="black" padding="16px" color="white">
            Box - React
        </Box>
    );
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
