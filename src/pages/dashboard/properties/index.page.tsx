import { ReactElement, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiEdit3, FiPlus, FiTrash } from 'react-icons/fi'
import * as Dialog from '@radix-ui/react-dialog'
import ContentLoader from 'react-content-loader'

import { useProperties } from '@/services/hooks/use-properties'
import { CONTAINER_ANIMATION, ITEM_ANIMATION } from '@/utils/animations'

import Button from '@/components/Button'
import DashboardWrapper from '@/components/DashboardWrapper'
import IconButton from '@/components/IconButton'
import ModalDelete from '@/components/ModalDelete'
import Pagination from '@/components/Pagination'

import * as S from './styles'
import { withSSRAuth } from '@/utils/with-ssr-auth'

const Loader = () => (
  <ContentLoader
    viewBox="0 0 900 507"
    backgroundColor="#b8c0cd"
    foregroundColor="#ffffff"
    style={{ width: '100%', display: 'block', marginTop: -68 }}
  >
    <rect x="30" y="60" rx="0" ry="0" width="200" height="120" />
    <rect x="30" y="189" rx="0" ry="0" width="200" height="15" />
    <rect x="30" y="211" rx="0" ry="0" width="140" height="15" />
    <rect x="243" y="60" rx="0" ry="0" width="200" height="120" />
    <rect x="243" y="189" rx="0" ry="0" width="200" height="15" />
    <rect x="243" y="211" rx="0" ry="0" width="140" height="15" />
    <rect x="455" y="60" rx="0" ry="0" width="200" height="120" />
    <rect x="455" y="189" rx="0" ry="0" width="200" height="15" />
    <rect x="455" y="211" rx="0" ry="0" width="140" height="15" />
    <rect x="667" y="60" rx="0" ry="0" width="200" height="120" />
    <rect x="667" y="188" rx="0" ry="0" width="200" height="15" />
    <rect x="667" y="209" rx="0" ry="0" width="140" height="15" />
    <rect x="30" y="280" rx="0" ry="0" width="130" height="23" />
    <rect x="30" y="320" rx="0" ry="0" width="200" height="120" />
    <rect x="30" y="450" rx="0" ry="0" width="200" height="15" />
    <rect x="30" y="474" rx="0" ry="0" width="140" height="15" />
    <rect x="243" y="320" rx="0" ry="0" width="200" height="120" />
    <rect x="455" y="320" rx="0" ry="0" width="200" height="120" />
    <rect x="667" y="320" rx="0" ry="0" width="200" height="120" />
    <rect x="243" y="450" rx="0" ry="0" width="200" height="15" />
    <rect x="455" y="450" rx="0" ry="0" width="200" height="15" />
    <rect x="667" y="450" rx="0" ry="0" width="200" height="15" />
    <rect x="243" y="474" rx="0" ry="0" width="140" height="15" />
    <rect x="455" y="474" rx="0" ry="0" width="140" height="15" />
    <rect x="667" y="474" rx="0" ry="0" width="140" height="15" />
  </ContentLoader>
)

export default function DashboardProperties() {
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const { data, isLoading } = useProperties({ currentPage })

  function handleOpenDeleteModal(id: string) {
    setSelectedProperty(id)
  }

  function handleOpenChange(value: boolean) {
    if (!value) {
      setSelectedProperty(null)
    }
  }

  return (
    <S.Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <S.PropertiesContainer
          variants={CONTAINER_ANIMATION({})}
          initial="hidden"
          animate="show"
        >
          {data?.properties.map(property => (
            <S.Property variants={ITEM_ANIMATION} key={property.id}>
              <S.ImageContainer>
                <Image
                  className="property-image"
                  src={property.images[0].url}
                  alt={property.name}
                  fill
                />
                <S.ButtonContainer>
                  <Dialog.Root onOpenChange={handleOpenChange}>
                    <Dialog.Trigger asChild>
                      <IconButton
                        variant="white"
                        onClick={() => handleOpenDeleteModal(property.id)}
                        icon={<FiTrash size={20} className="icon" />}
                      />
                    </Dialog.Trigger>
                    <ModalDelete
                      title="Deletar a propriedade"
                      description="Você tem certeza que deseja deletar a propriedade?"
                      handleCloseModal={() => handleOpenChange(false)}
                      propertyId={property.id}
                      selectedPropertyId={selectedProperty}
                    />
                  </Dialog.Root>
                  <Link
                    href={`/dashboard/properties/edit/${property.id}`}
                    passHref
                    legacyBehavior
                  >
                    <IconButton
                      variant="white"
                      as="a"
                      icon={<FiEdit3 size={20} className="icon" />}
                    />
                  </Link>
                </S.ButtonContainer>
              </S.ImageContainer>
              <S.Body>
                <strong>{property.name}</strong>
                <span className="city">{property.city}</span>
                <Link
                  href={`/dashboard/properties/${property.id}`}
                  passHref
                  legacyBehavior
                >
                  <Button
                    as="a"
                    className="button"
                    size="small"
                    variant="primary"
                  >
                    Ver mais
                  </Button>
                </Link>
              </S.Body>
            </S.Property>
          ))}
        </S.PropertiesContainer>
      )}
      <Pagination
        totalCountOfRegisters={data?.totalCount}
        currentPage={currentPage}
        perPage={9}
        onPageChange={setCurrentPage}
      />
    </S.Wrapper>
  )
}

DashboardProperties.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardWrapper
      button={
        <>
          <Link href="/dashboard/properties/create" passHref legacyBehavior>
            <IconButton
              as="a"
              variant="primary"
              className="small-button"
              icon={<FiPlus className="icon" size={22} />}
            />
          </Link>
          <Link href="/dashboard/properties/create" passHref legacyBehavior>
            <Button
              className="big-button"
              as="a"
              size="large"
              variant="primary"
            >
              Nova propriedade
            </Button>
          </Link>
        </>
      }
      title="Propriedades"
    >
      {page}
    </DashboardWrapper>
  )
}

export const getServerSideProps = withSSRAuth(
  async ctx => {
    return {
      props: {}
    }
  },
  {
    isAdmin: true
  }
)
