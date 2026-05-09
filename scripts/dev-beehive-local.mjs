import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "../artifacts/beehive-dental/node_modules/vite/dist/node/index.js";

const scriptsDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptsDir, "..");
const appRoot = path.join(workspaceRoot, "artifacts", "beehive-dental");

process.env.PORT ??= "5173";
process.env.BASE_PATH ??= "/";

const server = await createServer({
  configFile: path.join(appRoot, "vite.config.ts"),
  root: appRoot,
  server: {
    host: "127.0.0.1",
  },
});

await server.listen();
server.printUrls();

const shutdown = async () => {
  await server.close();
  process.exit(0);
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

setInterval(() => {}, 2 ** 31 - 1);
