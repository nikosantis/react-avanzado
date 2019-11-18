import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export default () => (
  <Layout title='Tus Favoritos' subtitle='Aquí encontrarás tus Favoritos de Petgram.'>
    <FavsWithQuery />
  </Layout>
)
