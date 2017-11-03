import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
app.use(bodyParser.json());
app.use('/app',express.static(path.resolve(__dirname,'../dist')))
app.use('/public', express.static(path.resolve(__dirname,'../server/static')))

const page = `
<!DOCTYPE html>
<html>
<head>
  <title>React Starter App</title>
</head>
<body>
  <div id="app"/>
  <script type="text/javascript" src="/app/main.bundle.js"></script>
</body>
</html>
`

app.use('*', (req,res)=>
  res.send(page)
)


const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
app.listen(port, err => {
  if (err) {
    return console.error(err)
  }
  console.info(`Server running on http://localhost:${port} [${env}]`)
})
