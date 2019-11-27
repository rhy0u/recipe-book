import React from 'react'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import { Box } from '@xstyled/styled-components'
import Button from 'client/components/Button'
import TextField from 'client/components/TextField'
import Select from 'react-select/creatable'
import { required } from 'client/utils/validators'

const RecipeForm = ({ ingredients, onSubmit }) => {
  return (
    <Form
      mutators={{
        ...arrayMutators,
      }}
      initialValues={{
        steps: [],
        ingredients: [],
      }}
      onSubmit={values => {
        onSubmit({
          recipe: {
            ...values,
            steps: JSON.stringify(values.steps),
            cookTime: +values.cookTime,
            preparationTime: +values.preparationTime,
            ingredients: values.ingredients.map(
              ({ quantity, value, unit }) => ({
                quantity,
                ...value,
                unit,
              }),
            ),
          },
        })
      }}
    >
      {({ handleSubmit, hasValidationErrors }) => (
        <form onSubmit={handleSubmit}>
          <Box row>
            <Box col={{ xs: 1 }} px={1}>
              <TextField
                name="name"
                label="Nom"
                placeholder="Poulet roti"
                validate={required}
              />
            </Box>
            <Box col={{ xs: 1 }} px={1}>
              <TextField
                name="description"
                label="Description"
                multiline
                rows={4}
                placeholder="C'est la recette de ma grand-mère"
                validate={required}
              />
            </Box>
            <Box col={{ xs: 1 }} px={1}>
              <FieldArray name="ingredients">
                {({ fields }) => (
                  <Box
                    col={{ xs: 1 }}
                    border="1px solid #999"
                    borderRadius="4px"
                    p={2}
                  >
                    {fields.map((name, index) => (
                      <Box
                        row
                        border="1px solid #999"
                        borderRadius="4px"
                        p={1}
                        key={name}
                      >
                        <Box col={{ xs: 1 }} px={1}>
                          <Field name={`${name}`}>
                            {({ input }) => (
                              <Select
                                {...input}
                                onCreateOption={value =>
                                  input.onChange({
                                    value: { name: value },
                                    label: value,
                                  })
                                }
                                options={ingredients.map(({ id, name }) => ({
                                  label: name,
                                  value: { id },
                                }))}
                                styles={{
                                  menu: provided => ({
                                    ...provided,
                                    backgroundColor: '#fff',
                                    zIndex: 2,
                                  }),
                                }}
                                isClearable
                              />
                            )}
                          </Field>
                        </Box>
                        <Box col={{ xs: 1 / 2 }} px={1}>
                          <TextField
                            name={`${name}.quantity`}
                            type="number"
                            label="quantité"
                            validate={required}
                          />
                        </Box>
                        <Box col={{ xs: 1 / 2 }} px={1}>
                          <TextField name={`${name}.unit`} label="unité" />
                        </Box>
                        <Box col={{ xs: 1 }} p={1}>
                          <Button
                            onClick={() => fields.remove(index)}
                            fullWidth
                            color="secondary"
                          >
                            Supprimer cet ingrédient
                          </Button>
                        </Box>
                      </Box>
                    ))}
                    <Box col={{ xs: 1 }} px={1} py={2}>
                      <Button onClick={() => fields.push('')} fullWidth>
                        Ajouter un ingredient
                      </Button>
                    </Box>
                  </Box>
                )}
              </FieldArray>
            </Box>
            <Box col={{ xs: 1, md: 1 / 2 }} px={1}>
              <TextField
                name="cookTime"
                label="Temps de cuisson (en minutes)"
                component="input"
                placeholder="45"
                validate={required}
              />
            </Box>
            <Box col={{ xs: 1, md: 1 / 2 }} px={1}>
              <TextField
                name="preparationTime"
                type="number"
                label="Temps depreparation (en minutes)"
                placeholder="15"
                validate={required}
              />
            </Box>
            <Box col={{ xs: 1 }} px={1}>
              <FieldArray name="steps">
                {({ fields }) => (
                  <Box
                    col={{ xs: 1 }}
                    border="1px solid #999"
                    borderRadius="4px"
                    p={2}
                  >
                    {fields.map((name, index) => (
                      <Box
                        row
                        border="1px solid #999"
                        borderRadius="4px"
                        p={1}
                        key={name}
                      >
                        <Box col={{ xs: 1 }} px={1}>
                          <TextField
                            name={name}
                            label={`Etape ${index}`}
                            multiline
                            rows={4}
                            validate={required}
                          />
                        </Box>
                        <Box col={{ xs: 1 }} p={1}>
                          <Button
                            onClick={() => fields.remove(index)}
                            fullWidth
                            color="secondary"
                          >
                            Supprimer cette étape
                          </Button>
                        </Box>
                      </Box>
                    ))}
                    <Box col={{ xs: 1 }} px={1} py={2}>
                      <Button onClick={() => fields.push('')} fullWidth>
                        Ajouter une étape
                      </Button>
                    </Box>
                  </Box>
                )}
              </FieldArray>
            </Box>
            <Box col={{ xs: 1 }} px={1} py={2}>
              <Button type="submit" fullWidth disabled={hasValidationErrors}>
                Ajouter la recette
              </Button>
            </Box>
          </Box>
        </form>
      )}
    </Form>
  )
}

export default RecipeForm
