import BaseModel, { mergeSchemas } from 'server/models/BaseModel'

class Ingredient extends BaseModel {
  static tableName = 'ingredients'

  static jsonSchema = mergeSchemas(BaseModel.jsonSchema, {
    required: ['name'],
    properties: {
      name: { type: 'string' },
    },
  })

  static relationMappings = {
    recipes: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: 'Recipe',
      join: {
        from: 'ingredients.id',
        through: {
          from: 'recipes_ingredients.ingredientId',
          to: 'recipes_ingredients.recipeId',
        },
        to: 'recipes.id',
      },
    },
  }
}

export default Ingredient
