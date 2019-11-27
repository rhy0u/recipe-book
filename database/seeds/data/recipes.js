import Recipe from 'server/models/Recipe'

export const generate = async ({ ingredients }) => {
  const [banane, chocolat] = await Recipe.query().insertGraphAndFetch(
    [
      {
        name: 'Banane',
        description: 'Tres tres simple',
        cookTime: 0,
        preparationTime: 0,
        steps: JSON.stringify(['posez la banane']),
        ingredients: [
          {
            ...ingredients.banane,
            quantity: 1,
          },
        ],
      },
      {
        name: 'Poire au chocolat',
        description: 'Tres simple',
        cookTime: 10,
        preparationTime: 10,
        steps: JSON.stringify([
          'eplucher les poires',
          'faire font le chocolat',
          'tremper les poires dans le chocolat',
          'laisser refroidir',
        ]),
        ingredients: [
          { ...ingredients.chocolat, quantity: 100, unit: 'g' },
          { ...ingredients.poire, quantity: 1 },
        ],
      },
    ],
    { relate: true },
  )

  return {
    banane,
    chocolat,
  }
}
