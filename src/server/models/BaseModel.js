import { Model } from 'objection'

export function mergeSchemas(...schemas) {
  return schemas.reduce(
    (mergedSchema, schema) => ({
      ...mergedSchema,
      ...schema,
      required: [...mergedSchema.required, ...schema.required],
      properties: {
        ...mergedSchema.properties,
        ...schema.properties,
      },
    }),
    {
      required: [],
      properties: {},
    },
  )
}

export default class BaseModel extends Model {
  // Uses http://json-schema.org/latest/json-schema-validation.html
  static jsonSchema = {
    type: 'object',
    required: [],
    properties: {
      id: { type: ['integer', 'string'] },
      createdAt: { type: 'date' },
      updatedAt: { type: 'date' },
    },
  }

  // Centralize the models.
  static modelPaths = [__dirname]

  // http://vincit.github.io/objection.js/#defaulteageralgorithm
  // static defaultEagerAlgorithm = Model.JoinEagerAlgorithm
  async $relatedCount(relation, modifier = x => x) {
    const subQuery = modifier(
      this.constructor
        .relatedQuery(relation)
        .count()
        .as('tempRelatedCount'),
    )

    const { tempRelatedCount } = await this.constructor
      .query()
      .select('*', subQuery)
      .where('id', this.id)
      .first()

    return tempRelatedCount
  }

  // Used by objection-rest
  $beforeUpdate() {
    this.updatedAt = new Date().toISOString()
  }
}
