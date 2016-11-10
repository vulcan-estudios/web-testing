import express from 'express';
import routers from 'server/routers';

const port = process.env.PORT || 7000;
const server = express();

routers(server);

server.listen(port, function (err) {
  if (err) throw err;

  console.log(`Server running at http://127.0.0.1:${port}/`);
});
