
// webpack.config.js
// const path = require('path');

// module.exports = {
//     entry: './day13.js',  // Entry point of your application
//     output: {
//         filename: 'bundle.js',  // Output bundle file
//         path: path.resolve(__dirname, 'dist'),  // Output directory
//     },
//     mode: 'development',  // Set the mode to development
// };


// webpack.config.mjs - for type "module"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './day13.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
};