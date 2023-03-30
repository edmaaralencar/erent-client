import { CONTAINER_ANIMATION, ITEM_ANIMATION } from '../../utils/animations'
import { motion } from 'framer-motion'

import * as S from './styles'

function Stats() {
  return (
    <S.Wrapper>
      <motion.div
        className="top"
        initial={{ width: '0' }}
        whileInView={{ width: '100%' }}
        transition={{
          duration: 1
        }}
      />
      <div className="bottom" />
      <S.StatsWrapper>
        <S.Container
          variants={CONTAINER_ANIMATION({})}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <S.Item variants={ITEM_ANIMATION}>
            <S.ItemIcon></S.ItemIcon>
            <S.ItemContent>
              <strong>540+</strong>
              <span>Aluguéis</span>
            </S.ItemContent>
          </S.Item>
          <S.Item variants={ITEM_ANIMATION}>
            <S.ItemIcon></S.ItemIcon>
            <S.ItemContent>
              <strong>30</strong>
              <span>Propriedades</span>
            </S.ItemContent>
          </S.Item>
          <S.Item variants={ITEM_ANIMATION}>
            <S.ItemIcon></S.ItemIcon>
            <S.ItemContent>
              <strong>40+</strong>
              <span>Clientes satisfeitos</span>
            </S.ItemContent>
          </S.Item>
        </S.Container>
      </S.StatsWrapper>
    </S.Wrapper>
  )
}

export default Stats
