import cors from 'cors'
import express from 'express';

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());

app.get('/sum', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  
  res.json({ message: a + b });
});

app.get('/interest', (req, res) => {
  const principle = parseFloat(req.query.principle);
  const rate = parseFloat(req.query.rate);
  const time = parseFloat(req.query.time);
  const result = (principle * rate * time) / 100;
  res.json({ msg: result });
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

