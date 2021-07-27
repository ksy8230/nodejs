const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, 'js'));

// extension
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);

// isAbsolute
console.log('yes', path.isAbsolute(__dirname));

// normalize
console.log(path.normalize('./folder////sub'));

// join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));