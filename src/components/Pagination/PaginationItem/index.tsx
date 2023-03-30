import Button from '@/components/Button'
import React from 'react'
import styled from 'styled-components'

const ButtonPagination = styled(Button)`
  width: auto;

  &:hover {
    /* background-color: #8c8c8c; */
    /* color: #ffffff; */
  }

  &:disabled {
    cursor: not-allowed;
  }
`

type PaginationItemProps = {
  isCurrent?: boolean
  number: number
  onPageChange: (page: number) => void
  disabled?: boolean
  text?: string
}

const PaginationItem = ({
  isCurrent = false,
  number,
  onPageChange,
  disabled = false,
  text
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button style={{ width: 'auto' }} variant="primary" size="small" disabled>
        {number}
      </Button>
    )
  }
  return (
    <ButtonPagination
      variant="outlined"
      size="small"
      onClick={() => onPageChange(number)}
      disabled={disabled}
    >
      {text ? text : number}
    </ButtonPagination>
  )
}

export default PaginationItem
