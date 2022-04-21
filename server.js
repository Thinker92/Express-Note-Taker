const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('public'));
// app.use('/notes', express.static('public/notes.html'))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

app.get('/notes', (req, res) => {
    console.log("Notes page")
    res.sendFile(path.join(__dirname, './public/notes.html'));
})


app.listen(PORT, (req, res) => {
    console.log(`Server connected on port ${PORT}`);
})

