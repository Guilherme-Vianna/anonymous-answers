import { connection } from "./infra/sqlconnection.js";    
import express from 'express'; 
import cors from 'cors'

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}


const app = express(); 
const port = 3000;

app.use(cors(corsOptions))
app.use(express.json());


app.post('/questions', async (req, res) => { 
  console.log(req.body);
  const [newQuestion] = await connection.execute(
    'INSERT INTO Questions(question, alternative1, alternative2, alternative3, answer)'+ 
    'VALUES (?,?,?,?,?)', [req.body.question, req.body.alt1, req.body.alt2, req.body.alt3, req.body.ans]);

  return res.status(201).json(newQuestion)
}); 

// app.get('/questions', async (req, res) => { 
//   let [result] = await connection.execute('SELECT * FROM Questions');  
//   return res.status(200).json(result)
// }); 

app.get('/questions', async (req, res) => { 
  let [result] = await connection.execute('SELECT * FROM Questions ORDER BY RAND() LIMIT 1');  
  return res.status(200).json(result)
}); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  

