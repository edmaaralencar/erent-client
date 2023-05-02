import { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiPlus, FiTrash } from 'react-icons/fi'

import Button from '@/components/Button'
import DashboardWrapper from '@/components/DashboardWrapper'
import IconButton from '@/components/IconButton'
import { useOptions } from '@/services/hooks/use-options'
import TableLoader from '@/components/TableLoader'

import * as S from './styles'
import { withSSRAuth } from '@/utils/with-ssr-auth'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/services/api'
import { queryClient } from '@/lib/query-client'
import { toast } from 'react-toastify'

export default function Options() {
  const { data, isLoading } = useOptions()

  const deleteOption = useMutation(
    async (optionId: string) => {
      await api({
        method: 'DELETE',
        endpoint: `/options/${optionId}`
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['options'])
        toast.success('Opção deletada com sucesso.')
      }
    }
  )

  async function handleDeleteOption(id: string) {
    await deleteOption.mutateAsync(id)
  }

  return (
    <S.Wrapper>
      {isLoading ? (
        <TableLoader />
      ) : (
        <S.Table>
          <thead>
            <S.Tr>
              <S.Th>Imagem</S.Th>
              <S.Th>Opção</S.Th>
            </S.Tr>
          </thead>
          <tbody>
            {data?.options.map(option => (
              <S.Tr key={option.id}>
                <S.Td>
                  <Image
                    className="avatar"
                    src={option.imageUrl}
                    alt={option.name}
                    width={38}
                    height={38}
                  />
                </S.Td>
                <S.Td>{option.name}</S.Td>
                <S.Td>
                  <button onClick={() => handleDeleteOption(option.id)}>
                    <FiTrash size={32} />
                  </button>
                </S.Td>
              </S.Tr>
            ))}
          </tbody>
        </S.Table>
      )}
    </S.Wrapper>
  )
}

Options.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardWrapper
      button={
        <>
          <Link href="/dashboard/options/create" passHref legacyBehavior>
            <IconButton
              as="a"
              variant="primary"
              className="small-button"
              icon={<FiPlus className="icon" size={22} />}
            />
          </Link>
          <Link href="/dashboard/options/create" passHref legacyBehavior>
            <Button
              className="big-button"
              as="a"
              size="large"
              variant="primary"
            >
              Nova opção
            </Button>
          </Link>
        </>
      }
      title="Opções"
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
