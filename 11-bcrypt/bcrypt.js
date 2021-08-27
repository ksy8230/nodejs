const bcrypt = require('bcrypt');

const pw = 'abc1234';
const hashed = bcrypt.hashSync(pw, 10);
console.log(hashed);

const result = bcrypt.compareSync(pw, hashed);
console.log(result);
