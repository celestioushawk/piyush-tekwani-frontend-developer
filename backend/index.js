import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/rockets", async (req, res) => {
  const url = `https://api.spacexdata.com/v3/rockets`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    res.send(json);
  } catch (err) {
    console.log(err);
  }
});

app.get("/rockets/:id", async (req, res) => {
  const url = `https://api.spacexdata.com/v3/rockets/${req.params.id}`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    res.send(json);
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000, () => console.log("server is running at post 3000"));
