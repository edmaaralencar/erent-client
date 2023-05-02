import * as S from "./styles";

export type SpinnerProps = {
   height?: number;
};

function Spinner({ height = 27 }: SpinnerProps) {
   return (
      <S.Wrapper height={height}>
         <div className="loading"></div>
      </S.Wrapper>
   );
}

export default Spinner;
