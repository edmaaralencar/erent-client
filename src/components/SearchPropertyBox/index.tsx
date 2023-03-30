import { useState } from 'react'
import Router from 'next/router'
import { FiChevronDown } from 'react-icons/fi'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { RemoveScroll } from 'react-remove-scroll'

import Button from '@/components/Button'

import * as S from './styles'
import { AnimatePresence } from 'framer-motion'
import { CONTAINER_ANIMATION, ITEM_ANIMATION } from './animations'
import { priceFormatter } from '@/utils/formatter'
import { prices, regions, rooms } from './constants'

function SearchBox() {
  const [region, setRegion] = useState<string | null>('')
  const [room, setRoom] = useState(0)
  const [dailyPrice, setDailyPrice] = useState(0)
  const [type, setType] = useState<string | null>(null)

  function handleDirectToPropertiesPage() {
    Router.push({
      pathname: '/properties',
      query: { page: 1, price: dailyPrice, region: region !== 'Todas' ? region : '', room }
    })
  }
  return (
    <S.Wrapper>
      <S.SearchInput
        onClick={() => {
          if (type === 'region') {
            setType(null)
          } else {
            setType('region')
          }
        }}
      >
        <S.SearchInfo>
          <strong>Região</strong>
          <div className="cursor">
            <FiChevronDown size={24} color="#8B8C8F" />
          </div>
        </S.SearchInfo>
        <p>{region === '' ? 'Escolha.' : region}</p>
        <AnimatePresence>
          {type === 'region' && (
            <S.Content
              variants={CONTAINER_ANIMATION}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {regions.map(item => (
                <S.Link
                  key={item}
                  onClick={() => {
                    setRegion(item)
                    setType(null)
                  }}
                  variants={ITEM_ANIMATION}
                >
                  <span>{item}</span>
                </S.Link>
              ))}
            </S.Content>
          )}
        </AnimatePresence>
      </S.SearchInput>
      <S.Divider />
      <S.SearchInput
        onClick={() => {
          if (type === 'rooms') {
            setType(null)
          } else {
            setType('rooms')
          }
        }}
      >
        <S.SearchInfo>
          <strong>Quartos</strong>
          <div className="cursor">
            <FiChevronDown size={24} color="#8B8C8F" />
          </div>
        </S.SearchInfo>
        <p>{room === 0 ? 'Selecione' : `${room} quarto(s)`}</p>
        <AnimatePresence>
          {type === 'rooms' && (
            <S.Content
              variants={CONTAINER_ANIMATION}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {rooms.map(item => (
                <S.Link
                  key={item}
                  onClick={() => {
                    setRoom(item)
                    setType(null)
                  }}
                  variants={ITEM_ANIMATION}
                >
                  <span>{item} quarto(s)</span>
                </S.Link>
              ))}
            </S.Content>
          )}
        </AnimatePresence>
      </S.SearchInput>
      <S.Divider />
      <S.SearchInput
        onClick={() => {
          if (type === 'prices') {
            setType(null)
          } else {
            setType('prices')
          }
        }}
      >
        <S.SearchInfo>
          <strong>Preço</strong>
          <div className="cursor">
            <FiChevronDown size={24} color="#8B8C8F" />
          </div>
        </S.SearchInfo>
        <p>
          {dailyPrice === 0 ? 'Selecione' : priceFormatter.format(dailyPrice)}
        </p>
        <AnimatePresence>
          {type === 'prices' && (
            <S.Content
              variants={CONTAINER_ANIMATION}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {prices.map(item => (
                <S.Link
                  key={item}
                  onClick={() => {
                    setDailyPrice(item)
                    setType(null)
                  }}
                  variants={ITEM_ANIMATION}
                >
                  <span>Até {priceFormatter.format(item)}</span>
                </S.Link>
              ))}
            </S.Content>
          )}
        </AnimatePresence>
      </S.SearchInput>
      <S.Divider />

      <Button className="button" type="button" onClick={handleDirectToPropertiesPage} size="small">
        Procurar
      </Button>
    </S.Wrapper>
  )
}

export default SearchBox
