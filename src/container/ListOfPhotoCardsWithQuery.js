import React from 'react'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const query = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
export const ListOfPhotoCardsWithQuery = ({ categoryId }) => (
  <Query query={query} variables={{ categoryId }}>
    {
      ({ loading, error, data }) => {
        if (loading) return null
        return <ListOfPhotoCardsComponent data={data} />
      }
    }
  </Query>
)
