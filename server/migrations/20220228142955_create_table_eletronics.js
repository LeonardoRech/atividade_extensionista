
exports.up = function(knex, Promise) {
    return knex.schema.createTable('eletronics', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('eletronic').notNull()
        table.binary('description').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('eletronics')
};
