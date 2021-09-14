import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_PROFILE = gql`
  query GetProfileData {
    user {
      id
      name
      email
      favourite_animal
      favourite_programming_language
    }
  }
`

export default function User(props) {
  const { loading, error, data } = useQuery(GET_PROFILE)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <div>
      <p>Name: {data.user.name}</p>
      <p>Eamil: {data.user.email}</p>
      <p>Favourite Animal: {data.user.favourite_animal}</p>
      <p>
        Favourite Programming Language:{' '}
        {data.user.favourite_programming_language}
      </p>
    </div>
  )
}
