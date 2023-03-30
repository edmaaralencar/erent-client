import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import Button from '../Button'
import Heading from '../Heading'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/services/api'
import { queryClient } from '@/lib/query-client'

type ModalDeleteProps = {
  title: string
  description: string
  handleCloseModal: () => void
  propertyId: string
  selectedPropertyId: string | null
}

function ModalDelete({
  title,
  description,
  handleCloseModal,
  propertyId,
  selectedPropertyId
}: ModalDeleteProps) {
  const deleteProperty = useMutation(
    async (propertyId: string) => {
      await api({
        method: 'DELETE',
        endpoint: `/properties/${propertyId}`
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['properties'])
      }
    }
  )
  return (
    <AnimatePresence>
      {propertyId === selectedPropertyId && (
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
                  src="/error.png"
                  alt="Delete property"
                  width={60}
                  height={60}
                />
              </S.ImageContainer>
              <Heading level={3} size="medium">
                {title}
              </Heading>
              <S.Description>{description}</S.Description>
              <S.ButtonContainer>
                <Button
                  onClick={handleCloseModal}
                  size="large"
                  variant="outlined"
                >
                  Cancelar
                </Button>
                <Button
                  onClick={() => {
                    deleteProperty.mutate(propertyId)
                    handleCloseModal()
                    // toast.success('Propriedade deletada com sucesso.')
                  }}
                  size="large"
                  variant="error"
                >
                  Deletar a propriedade
                </Button>
              </S.ButtonContainer>
            </S.Content>
          </Dialog.Content>
        </Dialog.Portal>
      )}
    </AnimatePresence>
  )
}

export default ModalDelete
