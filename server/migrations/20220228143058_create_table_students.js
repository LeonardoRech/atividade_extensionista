
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('eletronic').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('studetns')
};
