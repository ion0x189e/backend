import { Hono } from "https://deno.land/x/hono@v3.12.0/mod.ts";
import { cors } from "https://deno.land/x/hono@v3.12.0/middleware.ts";
import { getNews, getNewsById, createNews, updateNews, deleteNews } from "./controllers/NewsController.ts";
import { connect } from "./db.ts";

await connect();

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

Deno.serve({ port: 3000 }, app.fetch);