const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 5000;

app.get('/', (req, res) => {
        res.send('Hello Bro! I am from Node Js...!! Wow I added Nodemon virus');
})

const users = [
        {
                id: 0, name: '0', username: "0", email: "0@april.biz",
        },
        {
                id: 1, name: 'Akash', username: "A", email: "A@april.biz",
        },
        {
                id: 2, name: 'Batash', username: "B", email: "B@april.biz",
        },
        {
                id: 3, name: 'China', username: "C", email: "C@april.biz",
        }
]

// Result Query
app.get('/users', (req, res) => {
        const searchResult = req.query.search;
        if (searchResult) {
                const findResult = users.filter(user => user.name.toLocaleLowerCase().includes(searchResult.toLocaleLowerCase()));
                console.log(findResult.length)

                // Logic If Not Matched Search Item:
                if (findResult.length) {
                        res.send(findResult)
                }
                else {
                        res.send(['Sorry! Result Not Found'])
                }
        }
        else {
                res.send(users)
        }
})

// Post Method:
app.post('/users', (req, res) => {
        console.log('Hitting on the Server');
        res.send('Hitting on the Server');
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