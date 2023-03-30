import { ReactNode } from 'react'

import Heading from '../Heading'
import Sidebar from '../Sidebar'

import * as S from './styles'

type DashboardWrapperProps = {
  title: string
  button?: JSX.Element
  children: ReactNode
}

function DashboardWrapper({ title, button, children }: DashboardWrapperProps) {
  return (
    <>
      <S.Header>
        <S.HeaderContainer>
          <Heading level={1} size="medium">
            {title}
          </Heading>
          {!!button && <div className="button-container">{button}</div>}
        </S.HeaderContainer>
      </S.Header>
      <S.Wrapper>
        <Sidebar />
        <S.Dashboard>{children}</S.Dashboard>
      </S.Wrapper>
    </>
  )
}

export default DashboardWrapper
