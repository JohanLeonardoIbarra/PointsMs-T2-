import express from 'express';
import cors from 'cors';
import pointRouter from 'Routes/Point';

class Server {
  private app = express();
  private port: number;

  constructor() {
    this.port = 8082;
    this.app.use(express.json());
    this.app.use(cors({ origin: '*' }));
    this.routes();
  }

  public init() {
    this.listen();
  }

  private routes() {
    this.app.use('/points', pointRouter);
  }

  private listen() {
    this.app.listen(this.port, () => {
      console.log('App listen on port: ' + this.port);
    });
  }
}

export default Server;
