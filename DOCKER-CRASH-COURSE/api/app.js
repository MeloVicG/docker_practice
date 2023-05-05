const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

app.get('/', (req,res) => {
    res.json([
        {
            "id": "1",
            "title": "Book Review: bookOne"
        },
        {
            "id": "2",
            "title": "Board Review: boardOne"
        },
        {
            "id": "3",
            "title": "Movie Review: movieOne"
        },
        {
            "id": "4",
            "title": "Game Review: GameOne"
        }
    ])
})

app.listen(4000, () => {
    console.log("listening for requests in port 4000...");
})
