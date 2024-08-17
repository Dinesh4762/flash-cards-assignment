import { createClient } from "redis";
import { config } from "dotenv";
config();

// console.log(process.env.REDIS_HOST);

export const client = await createClient({
  password: process.env.REDIS_PASS,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
}).connect();
