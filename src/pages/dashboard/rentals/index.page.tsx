import { ReactElement, useState } from 'react'

import { useRentals } from '@/services/hooks/use-rentals'
import { dateFormatter, priceFormatter } from '@/utils/formatter'
import { withSSRAuth } from '@/utils/with-ssr-auth'

import DashboardWrapper from '@/components/DashboardWrapper'
import TableLoader from '@/components/TableLoader'
import Pagination from '@/components/Pagination'

import * as S from './styles'

export default function DashboardRentals() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useRentals({ currentPage })

  return (
    <S.Wrapper>
      {isLoading ? (
        <TableLoader />
      ) : (
        <S.ScrollWrapper>
          <S.Table>
            <thead>
              <S.Tr>
                <S.Th>Usuário</S.Th>
                <S.Th className="name">Propriedade</S.Th>
                <S.Th className="email">Check-in</S.Th>
                <S.Th>Checkout</S.Th>
                <S.Th>Total</S.Th>
              </S.Tr>
            </thead>

            <tbody>
              {data?.rentals.map(rental => (
                <S.Tr key={rental.id}>
                  <S.Td>{rental?.user}</S.Td>
                  <S.Td className="name">{rental?.property?.name}</S.Td>
                  <S.Td className="email">
                    {dateFormatter.format(rental?.checkIn)}
                  </S.Td>
                  <S.Td>{dateFormatter.format(rental?.checkout)}</S.Td>
                  <S.Td>{priceFormatter.format(rental?.total / 100)}</S.Td>
                </S.Tr>
              ))}
            </tbody>
          </S.Table>
        </S.ScrollWrapper>
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

DashboardRentals.getLayout = function (page: ReactElement) {
  return <DashboardWrapper title="Aluguéis">{page}</DashboardWrapper>
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
