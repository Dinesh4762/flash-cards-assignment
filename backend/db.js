import mysql from "mysql2";
import { config } from "dotenv";
config();

const pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: "avnadmin",
    password: process.env.DB_PASSWORD,
    database: "defaultdb",
    port: process.env.DB_PORT,
  })
  .promise();

export async function getCards() {
  console.log("cache miss");
  const [res] = await pool.query("SELECT * FROM cards");
  console.log(res);
  return res;
}
export async function getCard(id) {
  const [res] = await pool.query(`SELECT * FROM cards WHERE id = ?`,[id]);
  console.log(res);
  return res;
}

export async function createCard(question, answer) {
  try {
    const [res] = await pool.query(
      `INSERT into
        cards (question,answer)
        VALUES (?, ?)`,
      [question, answer]
    );
    console.log(res.insertId);
    return res.insertId;
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function editCard(id, ques, ans) {
  const [res] = await pool.query(
    `UPDATE cards
     SET question = ?, answer = ?
     WHERE id = ?      
    `,
    [ques, ans, id]
  );
  const isUpdated = res.affectedRows == 1;
  console.log(isUpdated);
  return isUpdated;
}

export async function deleteCard(id) {
  const [res] = await pool.query(
    `DELETE FROM cards
     WHERE id = ?      
    `,
    [id]
  );
  const isDeleted = res.affectedRows == 1;
  console.log(isDeleted);
  return isDeleted;
}

// deleteCard(6);
// createCard("test222", "test");