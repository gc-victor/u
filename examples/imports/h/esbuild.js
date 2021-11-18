require('esbuild').buildSync({
    entryPoints: ['examples/imports/h/app.jsx'],
    inject: ['examples/imports/h/shim.js'],
    jsxFactory: 'h',
    jsxFragment: 'fragment',
    bundle: true,
    outfile: 'examples/imports/app-jsx.js',
});
