const http = require("http");
const app = require("./webservice/app");
require("dotenv").config();

const PORT = process.env.PORT || 9000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 Server started on port: ${PORT}.`);
});
