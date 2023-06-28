const options = require('./build.options');
const esbuild = require('esbuild');
const fs = require('fs');

let timer = null;

fs.watch('./src', {recursive: true}, (evt) => {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(async ()=>{
        await esbuild.build(options);
        timer = null;
    }, 100);
});