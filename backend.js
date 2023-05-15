import express, { json } from 'express';
import cors from 'cors';
import { readFile, writeFile } from 'fs';

const app = express();

app.use(cors());
app.use(json());

app.get('/prodotti.json', (req, res) => {
    readFile('prodotti.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

app.post('/prodotti.json', (req, res) => {
    writeFile('prodotti.json', JSON.stringify(req.body,null, 2), (err) => {
        if (err) throw err;
        res.send('File saved');
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});