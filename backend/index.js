import express from "express";
import cors from "cors";
import { getCards, editCard, deleteCard, createCard, getCard } from "./db.js";
import { client } from "./client.js";
const app = express();
// app.use(cors());
app.use(
  cors({
    origin: ["https://flash-cards-assignment.vercel.app","http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
const PORT = 8080;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("working");
});
app.get("/cards", async (req, res) => {
  // checking cache
  const cachedCards = await client.get("cards");
  if (cachedCards) return res.json(JSON.parse(cachedCards));

  const cards = await getCards();
  res.json({ cards });
  await client.set("cards", JSON.stringify({ cards }));
});
app.get("/:id", async (req, res) => {
  const id = req.params.id;
  const cachedCards = await client.get("cards");  
  const parsedCards = JSON.parse(cachedCards);
  const cards = parsedCards.cards;
  const card = cards.find((card)=> card.id == id);
  res.json({ card });
});
app.put("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const { question, answer } = req.body;
  const isUpdated = await editCard(id, question, answer);
  if(isUpdated) await client.del("cards")
  res.json({ success: isUpdated });
});

app.post("/", async (req, res) => {
  const { question, answer } = req.body;
  const id = await createCard(question, answer);
  if (id) {
    await client.del("cards");
    res.json({ id });
  } else {
    res.status(411).json("creation failed");
  }
});

app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const isDeleted = await deleteCard(id);
  if (isDeleted) await client.del("cards");
  res.status(201).json({ success: isDeleted });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke");
});
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
