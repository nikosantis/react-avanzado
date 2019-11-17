import React from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCardsWithQuery } from '../container/ListOfPhotoCardsWithQuery'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery categoryId={id} />
    </>
  )
}
