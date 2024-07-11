import dotenv from "dotenv";
import { server } from "./app.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
