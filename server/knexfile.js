// Update with your config settings.

module.exports = {

    client: 'postgresql',
    connection: {
      database: 'aplicacao',
      user:     'postgres',
      password: 'gremio989'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
