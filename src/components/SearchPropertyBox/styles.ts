import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled.div`
  /* width: 100%; */
  width: 63rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.white.main};

  display: flex;
  align-items: stretch;
  justify-content: space-between;

  .button {
    align-self: center;
    flex-direction: row;
    margin: 0 1.8rem;
  }


  @media (max-width: 768px) {
    width: 100%;
    height: auto;

    flex-direction: column;
    /* padding: 1rem; */

    .button {
      margin: 1.8rem;
      max-width: 90%;
    }
  }
`

export const Divider = styled.hr`
  height: 100%;
  width: 0.8rem;
  background: #f5f8fa;
  border: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 0.4rem;
  }
`

export const Content = styled(motion.div)`
  width: max-content;
  padding: 0.6rem 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 11rem;

  background: ${({ theme }) => theme.colors.primary.main};
  /* box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07); */
  box-shadow: 10px 10px red;

  border-radius: 0.5rem;

  @media (max-width: 768px) {
    top: 8rem;
    z-index: 10;
    width: 100%;
  }
`

export const Link = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  width: 100%;
  padding: 1.2rem 2.4rem;

  text-decoration: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary.main};

  transition: all 300ms ease-in-out 0s;

  &:hover {
    background-color: #1d427b;
  }

  span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.white.main};
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const SearchInput = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 100%;

  padding: 1.6rem 1.8rem;

  p {
    color: rgba(24, 25, 31, 0.5);
    font-size: 1.4rem;
  }
`

export const SearchInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;

  height: 100%;

  strong {
    font-size: 2.2rem;
  }
`
