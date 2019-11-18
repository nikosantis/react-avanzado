import React from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCardsWithQuery } from '../container/ListOfPhotoCardsWithQuery'
import { Helmet } from 'react-helmet'

export const Home = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Tu Apps de Fotos de Mascotas 🐶</title>
        <meta name='description' content='Con Petgram puedes encontrar fotos de animales bonitos.' />
      </Helmet>
      <h1>Tu Apps de Fotos de Mascotas</h1>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery categoryId={id} />
    </>
  )
}
