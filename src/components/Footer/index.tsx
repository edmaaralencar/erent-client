import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

import * as S from './styles'

function Footer() {
  return (
    <S.Wrapper>
      <S.FooterContainer>
        <span>@ 2023 Edmar Alencar</span>

        <S.Icons>
          <S.Icon>
            <AiOutlineInstagram size={24} />
          </S.Icon>
          <S.Icon>
            <FaLinkedinIn size={24} />
          </S.Icon>
          <S.Icon>
            <AiOutlineGithub size={24} />
          </S.Icon>
        </S.Icons>
      </S.FooterContainer>
    </S.Wrapper>
  )
}

export default Footer
