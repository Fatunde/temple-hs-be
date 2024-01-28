#Migrate table
npx knex migrate:make create_users_table --migrations-directory src/database/migrations -x ts

#Seed datas
npx knex seed:make doctors --migrations-directory src/database/migrations -x ts
