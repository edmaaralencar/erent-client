import { FiStar } from 'react-icons/fi'
import * as S from './styles'

type RatingsProps = {
  setRating: (value: number) => void
  setHoverRating: (value: number) => void
  rating: number
  hoverRating: number
}

export type Rating = {
  id: string
  value: number
  message: string
  user_id: string
  property_id: string
  user: {
    name: string
  }
}

function Ratings({
  setRating,
  setHoverRating,
  rating,
  hoverRating
}: RatingsProps) {
  function handleOnMouseRating(rating: number) {
    if (rating !== 0) {
      setRating(0)
    }
    setHoverRating(rating)
  }

  function handleLeaveMouseRating() {
    setHoverRating(0)
  }

  function handleClickRating(rating: number) {
    setRating(rating)
  }

  return (
    <S.Wrapper>
      <label htmlFor="">Avalie</label>
      <S.Container>
        {[1, 2, 3, 4, 5].map(value => (
          <S.Rating
            key={value}
            onMouseEnter={() => handleOnMouseRating(value)}
            onMouseLeave={handleLeaveMouseRating}
            onClick={() => handleClickRating(value)}
            shouldFill={
              value < hoverRating || (rating !== 0 && value <= rating)
            }
            type="button"
          >
            <FiStar size={32} />
          </S.Rating>
        ))}
      </S.Container>
    </S.Wrapper>
  )
}

export default Ratings
