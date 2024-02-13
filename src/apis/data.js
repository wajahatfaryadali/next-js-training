const users = [
    { id: 1, name: 'John Doe', username: 'johndoe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', username: 'janesmith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', username: 'alicejohnson', email: 'alice.johnson@example.com' },
    { id: 4, name: 'Bob Brown', username: 'bobbrown', email: 'bob.brown@example.com' },
    { id: 5, name: 'Emily Davis', username: 'emilydavis', email: 'emily.davis@example.com' },
    { id: 6, name: 'Michael Wilson', username: 'michaelwilson', email: 'michael.wilson@example.com' },
    { id: 7, name: 'Olivia Martinez', username: 'oliviamartinez', email: 'olivia.martinez@example.com' },
    { id: 8, name: 'William Garcia', username: 'williamgarcia', email: 'william.garcia@example.com' },
    { id: 9, name: 'Sophia Rodriguez', username: 'sophiarodriguez', email: 'sophia.rodriguez@example.com' },
    { id: 10, name: 'James Hernandez', username: 'jameshernandez', email: 'james.hernandez@example.com' },
];

const posts = [
    { id: 1, title: 'Title 1', body: 'Body Content 1', userId: 1 },
    { id: 2, title: 'Title 2', body: 'Body Content 2', userId: 1 },
    { id: 3, title: 'Title 3', body: 'Body Content 3', userId: 2 },
    { id: 4, title: 'Title 4', body: 'Body Content 4', userId: 2 },
    { id: 5, title: 'Title 5', body: 'Body Content 5', userId: 3 },
    { id: 6, title: 'Title 6', body: 'Body Content 6', userId: 3 },
    { id: 7, title: 'Title 7', body: 'Body Content 7', userId: 4 },
    { id: 8, title: 'Title 8', body: 'Body Content 8', userId: 4 },
    { id: 9, title: 'Title 9', body: 'Body Content 9', userId: 5 },
    { id: 10, title: 'Title 10', body: 'Body Content 10', userId: 5 },
    { id: 11, title: 'Title 11', body: 'Body Content 11', userId: 6 },
    { id: 12, title: 'Title 12', body: 'Body Content 12', userId: 6 },
    { id: 13, title: 'Title 13', body: 'Body Content 13', userId: 7 },
    { id: 14, title: 'Title 14', body: 'Body Content 14', userId: 7 },
    { id: 15, title: 'Title 15', body: 'Body Content 15', userId: 8 },
    { id: 16, title: 'Title 16', body: 'Body Content 16', userId: 8 },
    { id: 17, title: 'Title 17', body: 'Body Content 17', userId: 8 },
    { id: 18, title: 'Title 18', body: 'Body Content 18', userId: 8 },
    { id: 19, title: 'Title 19', body: 'Body Content 18', userId: 8 },
    { id: 20, title: 'Title 20', body: 'Body Content 20', userId: 10 },
];


export const getMongoPosts = async () => {
    return posts;

}

export const getMongoSinglePostById = async (postId) => {
    return posts.find((post) => post.id === parseInt(postId));
}

export const getMongoUserById = async (userId) => {
    return users.find((user) => user.id === parseInt(userId));
}

