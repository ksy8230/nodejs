let users = [
    {
        id: '1',
        username: 'bob',
        password: '$2b$10$hNY7BRQ9JaAANw4Dri8fvusvr5ZZET4/iEY88R4wVql1efzNGxF/q', // abc123
        name: 'Bob',
        email: 'bob@gmail.com',
        url: '',
    },
];

export async function findByUsername(username) {
    return users.find(user => user.username === username);
}

export async function createUser(user) {
    const created = {...user, id: Date.now().toString()};
    users.push(created);
    return created.id;
}
