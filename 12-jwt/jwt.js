const jwt = require('jsonwebtoken');

const secret = 'CggstamxprHMRsV7 * hzm8HN9xZLHCdi5';
const token = jwt.sign(
    {
        id: 'userId',
        isAdmin: true,
    },
    secret,
    {
        expiresIn: 2,
    },
);

console.log(token);

const edited =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDA5OTkwNX0.cAQrFB7cNwg89zRsAYp8fdvkXtp7cfY9NSy1M0ODRNw';

jwt.verify(edited, secret, (error, decoded) => {
    console.log(decoded);
});
