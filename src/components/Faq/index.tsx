import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Heading from '../Heading'

import { CONTAINER_ANIMATION } from '../../utils/animations'
import { ITEM_ANIMATION } from './animations'

import * as S from './styles'

function Faq() {
  const [selectedItem, setSelectedItem] = useState(0)
  const items = [
    {
      id: 1,
      question: 'Whats the first step of the home renting process?',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, cumque dicta eligendi nobis laudantium consequuntur eum ea alias eos rem magni quos id fugit? Facere dolorem optio accusamus ex deserunt.'
    },
    {
      id: 2,
      question: 'Whats the first step of the home renting process?',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, cumque dicta eligendi nobis laudantium consequuntur eum ea alias eos rem magni quos id fugit? Facere dolorem optio accusamus ex deserunt.'
    },
    {
      id: 3,
      question: 'Whats the first step of the home renting process?',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, cumque dicta eligendi nobis laudantium consequuntur eum ea alias eos rem magni quos id fugit? Facere dolorem optio accusamus ex deserunt.'
    },
    {
      id: 4,
      question: 'Whats the first step of the home renting process?',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, cumque dicta eligendi nobis laudantium consequuntur eum ea alias eos rem magni quos id fugit? Facere dolorem optio accusamus ex deserunt.'
    },
    {
      id: 5,
      question: 'Whats the first step of the home renting process?',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, cumque dicta eligendi nobis laudantium consequuntur eum ea alias eos rem magni quos id fugit? Facere dolorem optio accusamus ex deserunt.'
    },
    {
      id: 6,
      question: 'Whats the first step of the home renting process?',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, cumque dicta eligendi nobis laudantium consequuntur eum ea alias eos rem magni quos id fugit? Facere dolorem optio accusamus ex deserunt.'
    }
  ]

  return (
    <S.Wrapper>
      <Heading size="large" weight="semibold" level={2}>
        Perguntas frequentes
      </Heading>

      <S.ItemsContainer
        variants={CONTAINER_ANIMATION({ staggerChildren: 0.2 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {items.map(item => (
          <S.ItemContainer variants={ITEM_ANIMATION} key={item.id}>
            <S.Item
              isActive={item.id === selectedItem}
              onClick={() =>
                item.id === selectedItem
                  ? setSelectedItem(0)
                  : setSelectedItem(item.id)
              }
            >
              <S.ItemQuestion>
                <span>{item.question}</span>

                <motion.div
                  animate={
                    item.id === selectedItem ? { rotate: 180 } : { rotate: 0 }
                  }
                  transition={{ duration: 0.1 }}
                >
                  <svg
                    fill="#05142b"
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 7 L 20 7 L 10 16" />
                  </svg>
                </motion.div>
              </S.ItemQuestion>

              <AnimatePresence initial={false}>
                {item.id === selectedItem && (
                  <S.ItemAnswer
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      transition: {
                        delay: 0.1
                      }
                    }}
                  >
                    <motion.p
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                          delay: 0.01
                        }
                      }}
                      exit={{
                        scale: 0.8,
                        opacity: 0
                      }}
                    >
                      {item.message}
                    </motion.p>
                  </S.ItemAnswer>
                )}
              </AnimatePresence>
            </S.Item>
          </S.ItemContainer>
        ))}
      </S.ItemsContainer>
    </S.Wrapper>
  )
}

export default Faq
