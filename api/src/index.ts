import app from "./app";
import { connectDB } from "./database";
import { PORT } from "./config";

async function main() {
  await connectDB();
  app.listen(PORT);
  console.log("Server on port ", PORT);
}

main();
