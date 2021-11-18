require('esbuild').buildSync({
    entryPoints: ['examples/h/app.jsx'],
    inject: ['src/h-shim.js'],
    jsxFactory: 'h',
    jsxFragment: 'fragment',
    bundle: true,
    outfile: 'examples/h/app-jsx.js',
});
