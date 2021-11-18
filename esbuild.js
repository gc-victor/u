const { buildSync } = require('esbuild');
const gzipSize = require('gzip-size');

[
    // React
    {
        format: 'esm',
        outdir: 'react',
        entryNames: '[dir]/index',
        entryPoints: ['src/react-component.js'],
    },
    {
        format: 'esm',
        outdir: 'react',
        entryNames: '[dir]/shim',
        entryPoints: ['src/react-shim.js'],
    },
    {
        format: 'cjs',
        outdir: 'react/cjs',
        entryNames: '[dir]/index',
        entryPoints: ['src/react-component.js'],
    },
    {
        format: 'iife',
        outdir: 'react/iife',
        entryPoints: ['src/react-component.js'],
    },
    // H
    {
        format: 'esm',
        outdir: 'h',
        entryNames: '[dir]/index',
        entryPoints: ['src/h-component.js'],
    },
    {
        format: 'esm',
        outdir: 'h',
        entryNames: '[dir]/shim',
        entryPoints: ['src/h-shim.js'],
    },
    {
        format: 'cjs',
        outdir: 'h/cjs',
        entryPoints: ['src/h-component.js'],
    },
    {
        format: 'iife',
        outdir: 'h/iife',
        entryPoints: ['src/h-component.js'],
    },
].forEach((config) => {
    const result = buildSync({
        bundle: true,
        entryNames: '[dir]/index',
        metafile: true,
        minify: true,
        external: ['react', 'h'],
        ...config,
    });

    let total = 0;
    let totalGzip = 0;

    Object.keys(result.metafile.outputs).forEach((key) => {
        total = total + result.metafile.outputs[key].bytes;
        totalGzip = totalGzip + gzipSize.fileSync(key);
        console.log(
            key,
            formatBytes(result.metafile.outputs[key].bytes),
            '- gzip:',
            formatBytes(gzipSize.fileSync(key))
        );
    });

    console.log('Total:', formatBytes(total), '- gzip:', formatBytes(totalGzip), '\n');
});

// https://stackoverflow.com/a/18650828
function formatBytes(a, b = 2) {
    if (0 === a) return '0 Bytes';
    const c = 0 > b ? 0 : b,
        d = Math.floor(Math.log(a) / Math.log(1024));
    return parseFloat((a / Math.pow(1024, d)).toFixed(c)) + ' ' + ['B', 'KB', 'MB', 'GB'][d];
}
