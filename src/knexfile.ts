import { Knex } from 'knex';
import { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } from './config/constant';

const environments: string[] = ['development', 'staging', 'production'];

const connection: Knex.ConnectionConfig = {
   host: DB_HOST as string,
   database: DB_NAME as string,
   user: DB_USER as string,
   password: DB_PASSWORD as string,
};

const commonConfig: Knex.Config = {
   client: 'pg',
   connection,
   pool: {
      min: 2,
      max: 10,
   },
   migrations: {
      directory: 'database/migrations',
   },
   seeds: {
      directory: 'database/seeds'
   }
};

export default Object.fromEntries(environments.map((env: string) => [env, commonConfig]));


//npx knex migrate:make create_users_table --migrations-directory src/database/migrations -x ts


//npx knex seed:make doctors --migrations-directory src/database/migrations -x ts