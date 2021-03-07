const express = require('express');
const path = require('path');

const app = express();

const members = [
    {
        id: 1, 
        name: 'John Doe',
        status: 'active'
    },
    {
        id: 2,
        name: 'Bob Williams',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Shannon Jackson',
        status: 'active'
    }
]

app.get('/api/members', (req, res) => {
    res.json(members);
});

// to create a route:
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// set a static folder
// use is the method that we use to include middleware
app.use(express.static(path.join(__dirname, 'public')));
// here public is set as the static folder


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));