import { Hono } from "https://deno.land/x/hono@v3.12.0/mod.ts";
import { cors } from "https://deno.land/x/hono@v3.12.0/middleware.ts";
import { getNews, getNewsById, createNews, updateNews, deleteNews } from "./controllers/NewsController.ts";
import { getCables, getCableById, createCable, updateCable, deleteCable } from "./controllers/CableController.ts";
import { cablesData } from "./data/cableData.ts";
import { Cable } from "./types/cable.ts";
import { getDb } from "./db.ts";
import { connect } from "./db.ts";

await connect();

// Insert cable data if the collection is empty
const db = getDb();
const cablesCollection = db.collection("cables");
const cableCount = await cablesCollection.countDocuments();

if (cableCount === 0) {
  console.log("Inserting initial cable data...");
  for (const cable of cablesData) {
    await createCable(cable);
  }
  console.log("Initial cable data inserted.");
}

const app = new Hono();

app.use("*", cors());

app.get("/news", async (c) => {
  return c.json(await getNews());
});

app.get("/news/:id", async (c) => {
  const id = c.req.param("id");
  const newsItem = await getNewsById(id);
  if (newsItem) {
    return c.json(newsItem);
  } else {
    return c.text("News not found", 404);
  }
});

app.post("/news", async (c) => {
  const { title, content } = await c.req.json();
  if (title && content) {
    const newNews = await createNews(title, content);
    return c.json(newNews, 201);
  } else {
    return c.text("Title and content are required", 400);
  }
});

app.put("/news/:id", async (c) => {
  const id = c.req.param("id");
  const { title, content } = await c.req.json();
  if (title && content) {
    const updatedNews = await updateNews(id, title, content);
    if (updatedNews) {
      return c.json(updatedNews);
    } else {
      return c.text("News not found", 404);
    }
  } else {
    return c.text("Title and content are required", 400);
  }
});

app.delete("/news/:id", async (c) => {
  const id = c.req.param("id");
  const success = await deleteNews(id);
  if (success) {
    return c.status(204);
  } else {
    return c.text("News not found", 404);
  }
});

app.get("/cables", async (c) => {
  return c.json(await getCables());
});

app.get("/cables/:id", async (c) => {
  const id = c.req.param("id");
  const cableItem = await getCableById(id);
  if (cableItem) {
    return c.json(cableItem);
  } else {
    return c.text("Cable not found", 404);
  }
});

app.post("/cables", async (c) => {
  const cable = await c.req.json();
  if (cable) {
    const newCable = await createCable(cable);
    return c.json(newCable, 201);
  } else {
    return c.text("Cable data is required", 400);
  }
});

app.put("/cables/:id", async (c) => {
  const id = c.req.param("id");
  const cable = await c.req.json();
  if (cable) {
    const updatedCable = await updateCable(id, cable);
    if (updatedCable) {
      return c.json(updatedCable);
    } else {
      return c.text("Cable not found", 404);
    }
  } else {
    return c.text("Cable data is required", 400);
  }
});

app.delete("/cables/:id", async (c) => {
  const id = c.req.param("id");
  const success = await deleteCable(id);
  if (success) {
    return c.status(204);
  } else {
    return c.text("Cable not found", 404);
  }
});

Deno.serve({ port: 3000 }, app.fetch);