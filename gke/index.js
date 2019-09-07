const express = require('express');
const app = express();
const PORT = 8081;

app.get('/', (req, res) => {
    res.json({ success: true, message: 'We have successfully deployed our application on kubernetes engine' })
})


app.get('/v2', (req, res) => {
    res.json({ success: true, message: 'We have successfully deployed our version 2 of our application on kubernetes engine' })
})

app.listen(PORT, () => console.log('Application running on port ', PORT))