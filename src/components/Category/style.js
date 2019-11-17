import styled, { keyframes } from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`
export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`
const ldsFacebook = keyframes`
  0% {
    top: 6px;
    height: 51px;
  }
  50%, 100% {
    top: 19px;
    height: 26px;
  }
`

export const SquareLoading = styled.div`
  display: block;
  position: relative;
  width: 64px;
  height: 64px;
  margin: 0 auto 5px;
`
export const SquareInside = styled.div`
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background: #222;
  animation: ${ldsFacebook} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  &:nth-child(1) {
    left: 6px;
    animation-delay: -0.24s;
  }
  &:nth-child(2) {
    left: 26px;
    animation-delay: -0.12s;
  }
  &:nth-child(3) {
    left: 45px;
    animation-delay: 0;
  }
`
