import express, { request, response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

const db = [];

app.post('/todo', (req, res) => {
    const newTodo = {
        id: Date.now(),
        text: req.body.text
    }

    db.push(newTodo);
    res.status(201)
    res.json(db);
});

app.get('/todo/:id', (req, res) => {
    const todo = db.find(t => {
        return t.id === +req.params.id
    })
    res.json({data: todo})
})

app.get('/todo', (req, res) => {
    res.json(db)
})

app.listen(8000, () => {
    console.log(`Server on https://localhost:8000`);
})