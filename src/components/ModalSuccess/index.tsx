import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import Button from '../Button'
import Heading from '../Heading'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'

type ModalSuccessProps = {
  title: string
  description: string
  handleCloseModal: () => void
  isOpen: boolean
  href: string
}

function ModalSuccess({
  title,
  description,
  handleCloseModal,
  isOpen,
  href
}: ModalSuccessProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog.Portal forceMount>
          <Dialog.Overlay forceMount asChild>
            <S.Overlay
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.2
                }
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.2
                }
              }}
            />
          </Dialog.Overlay>

          <Dialog.Content asChild forceMount>
            <S.Content
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0
              }}
              transformTemplate={(_, generated) =>
                `translateY(-50% -50%) ${generated}`
              }
            >
              <S.ImageContainer>
                <Image
                  src="/success.png"
                  alt="Propriedade criada com sucesso"
                  width={60}
                  height={60}
                />
              </S.ImageContainer>
              <Heading level={3} size="medium">
                {title}
              </Heading>
              <S.Description>{description}</S.Description>
              <Link href={href} passHref legacyBehavior>
                <Button as="a" size="small" variant="success">
                  Ok
                </Button>
              </Link>
            </S.Content>
          </Dialog.Content>
        </Dialog.Portal>
      )}
    </AnimatePresence>
  )
}

export default ModalSuccess
