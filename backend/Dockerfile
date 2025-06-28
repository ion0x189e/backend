FROM denoland/deno:latest

WORKDIR /app

COPY . .

RUN deno cache src/main.ts

EXPOSE 3000

CMD ["run", "--allow-net", "--allow-env=MONGO_URI", "src/main.ts"]