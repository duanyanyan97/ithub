const express = require('express');

const app = express();

// 监听端口
const PORT = 3000;
app.listen(PORT, () => {
    console.log('监听 3000');
});

app.get('/', (req, res) => {
    res.send('Hello Express');
})