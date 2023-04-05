import { AiOutlineGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'

import * as S from './styles'

function Footer() {
  return (
    <S.Wrapper>
      <S.FooterContainer>
        <span>@ 2023 Edmar Alencar</span>

        <S.Icons>
          <S.Icon href="https://edmaralencar.vercel.app/" target="_blank">
            <FiUser color="#000000" size={24} />
          </S.Icon>
          <S.Icon href="https://www.linkedin.com/in/edmar-alencar/" target="_blank">
            <FaLinkedinIn color="#000000"  size={24} />
          </S.Icon>
          <S.Icon href="https://github.com/edmaaralencar" target="_blank">
            <AiOutlineGithub color="#000000"  size={24} />
          </S.Icon>
        </S.Icons>
      </S.FooterContainer>
    </S.Wrapper>
  )
}

export default Footer
