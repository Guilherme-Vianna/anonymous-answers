import { connection } from "./infra/sqlconnection.js";    
import express from 'express'; 

const app = express(); 
const port = 3000;

app.use(express.json());


app.post('/questions', async (req, res) => { 
  console.log(req.body);
  const [newQuestion] = await connection.execute(
    'INSERT INTO Questions(question, alternative1, alternative2, alternative3, answer)'+ 
    'VALUES (?,?,?,?,?)', [req.body.question, req.body.alt1, req.body.alt2, req.body.alt3, req.body.ans]);

  return res.status(201).json(newQuestion)
}); 

app.get('/questions', async (req, res) => { 
  let [result] = await connection.execute('SELECT * FROM Questions');  
  return res.status(200).json(result)
}); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  

