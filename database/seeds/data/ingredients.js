import Ingredient from 'server/models/Ingredient'

export const generate = async () => {
  const [
    banane,
    chocolat,
    poire,
  ] = await Ingredient.query().insertGraphAndFetch(
    [{ name: 'Banane' }, { name: 'Chocolat' }, { name: 'Poire' }],
    { relate: true },
  )

  return {
    banane,
    chocolat,
    poire,
  }
}
