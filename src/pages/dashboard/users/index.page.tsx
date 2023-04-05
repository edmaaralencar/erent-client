import { ReactElement, useState } from 'react'
import Image from 'next/image'

import { withSSRAuth } from '@/utils/with-ssr-auth'
import { useUsers } from '@/services/hooks/use-users'
import DashboardWrapper from '@/components/DashboardWrapper'
import Pagination from '@/components/Pagination'
import TableLoader from '@/components/TableLoader'

import * as S from './styles'

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useUsers({ currentPage })

  return (
    <S.Wrapper>
      {isLoading ? (
        <TableLoader />
      ) : (
        <S.Table>
          <thead>
            <S.Tr>
              <S.Th></S.Th>
              <S.Th className="name">Usuário</S.Th>
              <S.Th className="email">E-mail</S.Th>
              <S.Th>Aluguéis</S.Th>
              <S.Th>Cargo</S.Th>
            </S.Tr>
          </thead>
          <tbody>
            {data?.users.map(user => (
              <S.Tr key={user.id}>
                <S.Td>
                  <Image
                    className="avatar"
                    src={user.avatar ? user.avatar : '/avatar.png'}
                    alt={user.name}
                    width={38}
                    height={38}
                  />
                </S.Td>
                <S.Td className="name">{user.name}</S.Td>
                <S.Td className="email">{user.email}</S.Td>
                <S.Td>{user.rentals > 0 ? user.rentals : 'Nenhum'}</S.Td>
                <S.Td>{user.role}</S.Td>
              </S.Tr>
            ))}
          </tbody>
        </S.Table>
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

Users.getLayout = function (page: ReactElement) {
  return <DashboardWrapper title="Usuários">{page}</DashboardWrapper>
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
