exports.up = async knex =>
  knex.schema
    .createTable('recipes', table => {
      table.bigIncrements('id').primary()
      table.string('name').notNull()
      table.integer('preparation_time')
      table.integer('cook_time')
      table.text('description').notNull()
      table.jsonb('steps').notNull()
      table.timestamps(false, true)
    })
    .createTable('ingredients', table => {
      table.bigIncrements('id').primary()
      table.string('name').notNull()
      table.timestamps(false, true)
    })
    .createTable('recipes_ingredients', table => {
      table.bigIncrements('id').primary()
      table.float('quantity').notNull()
      table.string('unit')
      table
        .bigInteger('recipe_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
      table
        .bigInteger('ingredient_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
      table.timestamps(false, true)
    })

exports.down = async knex =>
  knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
