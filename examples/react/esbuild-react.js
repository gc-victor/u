require('esbuild').buildSync({
    entryPoints: ['examples/react/app.jsx'],
    inject: ['src/react-shim.js'],
    bundle: true,
    outfile: 'examples/react/app-react.js',
});
