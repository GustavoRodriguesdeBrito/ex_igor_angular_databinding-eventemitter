const http = require("http");
// TODO: conectar express-app no server.js
const app = require("./app");
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`=== Server running on port ${PORT} ===`);
});
