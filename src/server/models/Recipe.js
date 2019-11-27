import BaseModel, { mergeSchemas } from 'server/models/BaseModel'

class Recipe extends BaseModel {
  static tableName = 'recipes'

  static jsonSchema = mergeSchemas(BaseModel.jsonSchema, {
    required: ['name'],
    properties: {
      name: { type: 'string' },
      description: { type: ['string', 'null'] },
      cookTime: { type: ['number', 'null'] },
      preparationTime: { type: ['number', 'null'] },
    },
  })

  static relationMappings = {
    ingredients: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: 'Ingredient',
      join: {
        from: 'recipes.id',
        through: {
          from: 'recipes_ingredients.recipeId',
          to: 'recipes_ingredients.ingredientId',
          extra: ['quantity', 'unit'],
        },
        to: 'ingredients.id',
      },
    },
  }
}

export default Recipe
