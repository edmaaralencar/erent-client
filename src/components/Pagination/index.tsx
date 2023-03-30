import PaginationItem from './PaginationItem'
import * as S from './styles'

type PaginationProps = {
  totalCountOfRegisters: number
  currentPage?: number
  onPageChange: (page: number) => void
  perPage: number
}

function Pagination({
  totalCountOfRegisters,
  perPage,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  return (
    <S.Wrapper>
      {Math.ceil(totalCountOfRegisters / perPage) === 1 && (
        <>
          <PaginationItem
            number={currentPage}
            onPageChange={onPageChange}
            isCurrent={currentPage === 1}
          />
          <PaginationItem
            onPageChange={onPageChange}
            number={currentPage + 1}
            isCurrent={false}
            text="Próximo"
            disabled={true}
          />
        </>
      )}

      {Math.ceil(totalCountOfRegisters / perPage) !== 1 &&
        currentPage === 1 && (
          <>
            <PaginationItem
              number={currentPage}
              onPageChange={onPageChange}
              isCurrent={currentPage === 1}
            />
            <PaginationItem
              onPageChange={onPageChange}
              number={currentPage + 1}
              isCurrent={false}
              text="Próximo"
            />
          </>
        )}

      {currentPage > 1 &&
        currentPage !== Math.ceil(totalCountOfRegisters / perPage) && (
          <>
            <PaginationItem
              onPageChange={() => onPageChange(currentPage - 1)}
              number={1}
              isCurrent={false}
              text="Anterior"
            />
            <PaginationItem
              number={currentPage - 1}
              onPageChange={() => onPageChange(currentPage - 1)}
              isCurrent={false}
            />
            <PaginationItem
              number={currentPage}
              onPageChange={onPageChange}
              isCurrent={true}
            />
            <PaginationItem
              number={currentPage + 1}
              onPageChange={() => onPageChange(currentPage + 1)}
              isCurrent={false}
            />
            <PaginationItem
              onPageChange={() => onPageChange(currentPage + 1)}
              number={1}
              isCurrent={false}
              text="Próximo"
            />
          </>
        )}

      {currentPage === Math.ceil(totalCountOfRegisters / perPage) &&
        currentPage !== 1 && (
          <>
            <PaginationItem
              onPageChange={() => onPageChange(currentPage - 1)}
              number={1}
              isCurrent={false}
              text="Anterior"
            />
            <PaginationItem
              number={currentPage}
              onPageChange={onPageChange}
              isCurrent={true}
            />
          </>
        )}
    </S.Wrapper>
  )
}

export default Pagination
