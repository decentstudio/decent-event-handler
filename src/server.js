import express from 'express';
import routes from './routes/main-routes';

const app = express();

app.use('/', routes);

const server = app.listen(4200, () => {
  const {address, port} = server.address();

  console.log(`Shit is listening on port ${port}`);
});