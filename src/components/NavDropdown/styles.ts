import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Content = styled(motion.div)`
  position: absolute;
  right: -2.5rem;
  top: 1.5rem;
  z-index: 10;

  width: 25rem;
  padding: 0.6rem 0;

  /* background-color: ${({ theme }) => theme.colors.gray.lighter}; */
  background-color: #f2f2f2;
  border-radius: 0.5rem;
`

export const Link = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  width: 100%;
  padding: 1.2rem 2.4rem;

  text-decoration: none;
  border: none;
  background-color: #f2f2f2;
  /* background-color: ${({ theme }) => theme.colors.gray.light}; */

  transition: all 300ms ease-in-out 0s;

  &:hover {
    background: rgba(70, 70, 70, 0.09);
  }

  span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.black.main};
  }
`
