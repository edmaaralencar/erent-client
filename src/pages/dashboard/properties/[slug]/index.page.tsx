import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { z } from 'zod'
import { FaBath, FaBed } from 'react-icons/fa'
import { FiCoffee, FiEdit, FiTrash } from 'react-icons/fi'
import * as Dialog from '@radix-ui/react-dialog'

import { api } from '@/services/api'
import { useOptions } from '@/services/hooks/use-options'
import { CONTAINER_ANIMATION, ITEM_ANIMATION } from '@/utils/animations'

import DashboardWrapper from '@/components/DashboardWrapper'
import Heading from '@/components/Heading'
import IconButton from '@/components/IconButton'
import ModalDelete from '@/components/ModalDelete'

import * as S from './styles'
import { withSSRAuth } from '@/utils/with-ssr-auth'
import { propertySchema } from '@/schemas/properties-schema'

export default function DashboardProperty() {
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null)
  const router = useRouter()
  const { slug } = router.query
  const { data: dataOptions } = useOptions()

  function handleOpenChange(value: boolean) {
    if (!value) {
      setSelectedProperty(null)
    }
  }

  const { data, isLoading } = useQuery(
    [`properties/${slug}`],
    async () => {
      const response = await api({
        method: 'GET',
        endpoint: `/properties/${slug}`
      })

      const property = propertySchema.parse(response.property)

      return {
        property
      }
    },
    {
      staleTime: (1000 * 60) & 10,
      enabled: !!slug
    }
  )

  const formattedOptions = dataOptions?.options.map(option => {
    if (data?.property.options.some(item => item.id === option.id)) {
      return {
        ...option,
        propertyHas: true
      }
    } else {
      return {
        ...option,
        propertyHas: false
      }
    }
  })

  if (isLoading || !data) {
    return <h1>Carregando...</h1>
  }

  return (
    <Dialog.Root onOpenChange={handleOpenChange}>
      <ModalDelete
        title="Deletar a propriedade"
        description="Você tem certeza que deseja deletar a propriedade?"
        handleCloseModal={() => handleOpenChange(false)}
        propertyId={data?.property.id}
        selectedPropertyId={selectedProperty}
      />
      <DashboardWrapper
        button={
          <>
            <Dialog.Trigger asChild>
              <IconButton
                onClick={() => setSelectedProperty(data?.property?.id)}
                variant="primary"
                icon={<FiTrash size={22} className="icon" />}
              />
            </Dialog.Trigger>
            <IconButton
              variant="primary"
              icon={<FiEdit size={22} className="icon" />}
            />
          </>
        }
        title="Propriedade"
      >
        <S.Wrapper>
          <S.ImageContainer
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                type: 'spring',
                stiffness: 50,
                duration: 0.2
              }
            }}
          >
            <Image
              className="property-image"
              src={'/image.png'}
              alt={data?.property?.name}
              fill
            />
          </S.ImageContainer>

          <S.Heading>
            <Heading size="medium" level={2}>
              {data?.property?.name}
            </Heading>
            <span>
              {data?.property?.city}, Região {data?.property?.region}
            </span>
          </S.Heading>

          <S.InfoContainer>
            <S.Info>
              <span>{data?.property?.rooms}</span>
              <FaBed size={28} />
            </S.Info>
            <S.VerticalLine />
            <S.Info>
              <span>{data?.property?.bathrooms}</span>
              <FaBath size={24} />
            </S.Info>
            <S.VerticalLine />
            <span>{data?.property?.size} m2</span>
          </S.InfoContainer>

          <S.Body>{data?.property?.description}</S.Body>

          <S.Options
            variants={CONTAINER_ANIMATION({})}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {formattedOptions?.map(option => (
              <S.OptionWrapper variants={ITEM_ANIMATION} key={option.id}>
                <S.Option propertyHas={option.propertyHas} key={option.id}>
                  <S.OptionIcon>
                    <FiCoffee size={40} color="47474D" />
                  </S.OptionIcon>
                  <span>{option.name}</span>
                </S.Option>
              </S.OptionWrapper>
            ))}
          </S.Options>
        </S.Wrapper>
      </DashboardWrapper>
    </Dialog.Root>
  )
}

export const getServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {}
  }
}, {
  isAdmin: true
})
