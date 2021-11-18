require('esbuild').buildSync({
    entryPoints: ['examples/imports/react/app.jsx'],
    inject: ['examples/imports/react/shim.js'],
    bundle: true,
    outfile: 'examples/imports/app-jsx.js',
});
