import express from 'express';
import { JellyBeansApi } from './jellyBeansApi';

const app = express();
const port = 3000;
const logger = console;

(async () => {
  app.use('/jellybeans', new JellyBeansApi().app);
  app.listen(port);
})()
  .then(() => logger.log(`Express server is listening on ${port}`))
  .catch(err => {
    throw err;
  });
