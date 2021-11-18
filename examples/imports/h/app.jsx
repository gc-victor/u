import u from 'u/h';

function Box(props) {
    return u({ tag: 'div', ...props });
}

function App() {
    return (
        <Box id="app" background="black" padding="16px" color="white">
            Box - H
        </Box>
    );
}

const app = document.getElementById('app');
app.parentNode.replaceChild(App(), app);
