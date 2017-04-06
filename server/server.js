

require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-Parser');
const app = express();
const db = require('./queries');



const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';
app.use('/static', express.static(path.join(__dirname, '../client/public')));

//app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*app.post('/api/v1/todos', (req,res) =>{
  //console.log(res.json(res.body));
  console.log(req.body);
});
*/
/*app.get('/api/v1/todos',(req, res)=>{
  const obj  = {Tasks: [
    {'task': 'eat'},
    {'task': 'sleep'},
    {'task': 'fuck'} 
  ]};
              return res.json(obj);
});*/

app.post('/api/v1/todos', db.createTodo);


app.get('*', (req,res) => {
    return res.sendFile(path.join(__dirname,'../client/public/index.html'))
});

app.listen(process.env.SERVER_PORT, () => {
    console.log('app is on ', process.env.SERVER_PORT)
});