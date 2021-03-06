exports.up = function(knex, Promise) {
  return knex.schema.createTable('statusTypes', tbl => {
    tbl.integer('statusID').notNullable();
    tbl.string('statusFromBoard').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('statusTypes');
};
