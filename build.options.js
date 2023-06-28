
const options = {
    entryPoints: ['src/index.js'],
    bundle: true,
    outdir: './dist',
    loader: {'.html': 'text'},
    format: 'esm'
};

module.exports = options;