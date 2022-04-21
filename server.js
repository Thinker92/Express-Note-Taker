const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));


app.get('/', (req, res) => {
    console.log("Home page")
})

app.listen(PORT, (req, res) => {
    console.log(`Server connected on port ${PORT}`);
})

