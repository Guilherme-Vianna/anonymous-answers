import { connection } from "./infra/sqlconnection.js";
import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());
app.options({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
});

app.post("/questions", async (req, res) => {
  console.log(req.body);
  const [newQuestion] = await connection.execute(
    "INSERT INTO Questions(question, alternative1, alternative2, alternative3, answer)" +
      "VALUES (?,?,?,?,?)",
    [
      req.body.question,
      req.body.alt1,
      req.body.alt2,
      req.body.alt3,
      req.body.ans,
    ]
  );

  return res.status(201).json(newQuestion);
});

app.get("/questions", async (req, res) => {
  let [result] = await connection.execute(
    "SELECT * FROM Questions ORDER BY RAND() LIMIT 1"
  );
  return res.status(200).json(result);
});

app.post("/questions/create", async (req, res) => {
  const query =
    "INSERT INTO Questions(question, alternative1, alternative2, alternative3, answer) VALUES (?,?,?,?,?)";
  const body = req.body;
  let [result] = await connection.execute(query, [
    body.question,
    body.alt1,
    body.alt2,
    body.alt3,
    body.ans,
  ]);
  return res.status(200).json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
