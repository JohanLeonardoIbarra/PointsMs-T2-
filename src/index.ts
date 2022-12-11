import 'reflect-metadata';
import Server from 'App/Server';
import { DataSource } from 'typeorm';
import { Point } from 'Model/Point';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'castor.db.elephantsql.com',
  port: 5432,
  username: 'ranzrqem',
  password: 'BOt6B1_FRbHjPbE_vgWDakqD_O_qeyZb',
  database: 'ranzrqem',
  entities: [Point],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    const app = new Server();
    app.init();
  })
  .catch(error => console.log(error));

export default AppDataSource;
