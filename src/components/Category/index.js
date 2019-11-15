import React from 'react'
import { Anchor, Image, SquareLoading, SquareInside } from './style'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)

export const Loading = () => {
  return (
    <SquareLoading>
      <SquareInside />
      <SquareInside />
      <SquareInside />
    </SquareLoading>
  )
}
