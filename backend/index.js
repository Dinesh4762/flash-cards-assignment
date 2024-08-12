import express from "express";
import cors from "cors";
import { getCards, editCard, deleteCard, createCard, getCard } from "./db.js";
const app = express();
const PORT = 8080;
app.use(express.json());
app.use("/*", cors());


app.get("/",(req,res) =>{
    res.send("working");
})
app.get("/cards", async (req, res) => {
  const cards = await getCards();
  res.json({ cards });
});
app.get("/:id",async (req,res)=>{
    const id = req.params.id;
    const card = await getCard(id);
    res.json({card});
})
app.put("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const { question, answer } = req.body;
  const isUpdated = await editCard(id, question, answer);
  res.json({success: isUpdated});
});

app.post("/", async (req, res) => {
  const { question, answer } = req.body;
  const id = await createCard(question, answer);
  res.json({id});
});

app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const isDeleted = await deleteCard(id);
  res.status(201).json({success: isDeleted});
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broken");
});
app.listen(8080, () => {
  console.log(`server started on PORT ${PORT}`);
});
