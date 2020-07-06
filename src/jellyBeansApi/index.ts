import cors from 'cors';
import express, { Express } from 'express';
import { JellyBeansRouter } from './routes/jellyBeansRouter';

export class JellyBeansApi {
  public readonly app: Express;
  constructor() {
    this.app = express();

    // API specific middleware
    this.app.use(cors());
    // parse application/x-www-form-urlencoded
    this.app.use(express.urlencoded({ extended: false }));

    // add middleware to parse application/json
    this.app.use(express.json());

    // ChargingSite API specific endpoint router(s) as middleware
    this.app.use('/', new JellyBeansRouter().router);
  }
}
