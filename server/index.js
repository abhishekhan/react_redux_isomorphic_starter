import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';


app.get('/', (req, res)=>{
    res.send("Welcome to my Starter Kit")
})

app.listen(port, err => {
  if (err) {
    return console.error(err)
  }
  console.info(`Server running on http://localhost:${port} [${env}]`)
})
