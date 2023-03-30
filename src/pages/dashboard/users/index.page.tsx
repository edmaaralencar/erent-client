import { ReactElement } from 'react'
import Image from 'next/image'

import DashboardWrapper from '@/components/DashboardWrapper'

import * as S from './styles'
import { withSSRAuth } from '@/utils/with-ssr-auth'

const users = [
  {
    id: 1,
    img: '',
    name: 'Edmar',
    email: 'edmar@gmail.com',
    rentals: 5,
    role: 'Admin'
  }
]

export default function Users() {
  return (
    <S.Wrapper>
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
          {users.map((user: any) => (
            <S.Tr key={user.id}>
              <S.Td>
                <Image
                  className="avatar"
                  src={
                    (user.avatar &&
                      `http://localhost:3333/files/${user.avatar}`) ||
                    '/avatar.png'
                  }
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
      {/* 
      <Pagination
        totalCountOfRegisters={data?.totalCount}
        currentPage={currentPage}
        perPage={registersPerPage}
        onPageChange={setCurrentPage}
      /> */}
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
