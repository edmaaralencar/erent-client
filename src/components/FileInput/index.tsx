import { forwardRef, LegacyRef } from 'react'
import * as S from './styles'

type FileInputProps = {
  onAddImage: () => void
  images: Array<{
    fileName: string
    size: number
  }>
}

const FileInput = (
  { onAddImage, images }: FileInputProps,
  ref: LegacyRef<HTMLInputElement>
) => {
  return (
    <>
      <S.InputWrapper>
        <input
          multiple
          ref={ref}
          onChange={onAddImage}
          type="file"
          id="upload-button"
          hidden
        />
        <label className="upload-label" htmlFor="">
          Imagens
        </label>
        <label className="upload-button" htmlFor="upload-button">
          + Adicionar uma foto
        </label>
      </S.InputWrapper>
      {images.length > 0 && (
        <S.ListImages>
          {images.map((image, index) => (
            <li key={index}>
              {image.fileName} - {image.size} bytes
            </li>
          ))}
        </S.ListImages>
      )}
    </>
  )
}

export default forwardRef(FileInput)
