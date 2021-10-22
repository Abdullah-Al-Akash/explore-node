const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
        res.send('Hello Bro! I am from Node Js...!! Wow I added Nodemon virus');
})

const users = [
        {
                id: 0, name: '0', username: "0", email: "0@april.biz",
        },
        {
                id: 1, name: 'A', username: "A", email: "A@april.biz",
        },
        {
                id: 2, name: 'B', username: "B", email: "B@april.biz",
        },
        {
                id: 3, name: 'C', username: "C", email: "C@april.biz",
        }
]

app.get('/users', (req, res) => {
        res.send(users);
        console.log(req.query.search);
})

app.get('/users/:id', (req, res) => {
        const id = req.params.id;
        const user = users[id];
        res.send(user);
})

// Get Fruits Mama:
app.get('/fruits', (req, res) => {
        res.send(['Mango', 'Banana', 'Amloki']);
})

app.listen(port, () => {
        console.log('Thanks Bro! I can Listen... Yahooo');
})