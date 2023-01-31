import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Initialisation
const start = async (): Promise<void> => {
  app.listen(port, () => console.log(`Server started on ${port}`));
};

void start();
