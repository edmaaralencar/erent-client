import { ReactElement, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { MdErrorOutline } from 'react-icons/md'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

import { api } from '@/services/api'

import AppWrapper from '@/components/AppWrapper'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Input from '@/components/Input'
import Ratings from '@/components/Ratings'
import ToastMessage from '@/components/ToastMessage'
import ModalSuccess from '@/components/ModalSuccess'

import * as S from './styles'

const reviewSchema = z.object({
  title: z.string().min(1, { message: 'Título obrigatório.' }),
  description: z.string().min(1, { message: 'Descrição obrigatória.' })
})

type ReviewFormData = z.infer<typeof reviewSchema>

export default function Review() {
  const [hoverRating, setHoverRating] = useState(0)
  const [rating, setRating] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema)
  })

  async function handleReviewProperty(data: ReviewFormData) {
    if (!rating) {
      return toast.error(
        <ToastMessage
          title="Ocorreu um erro."
          description="Avalie a propriedade."
        />
      )
    }

    try {
      await api({
        method: 'POST',
        endpoint: '/ratings',
        body: {
          propertyId: router.query.slug,
          title: data.title,
          description: data.description,
          value: rating
        }
      })

      setIsOpen(true)
    } catch (error) {
      console.log(error)
      toast.error(
        <ToastMessage
          title="Ocorreu um erro."
          description="Você já avaliou essa propriedade."
        />
      )
    }
  }

  return (
    <S.Wrapper onSubmit={handleSubmit(handleReviewProperty)}>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <ModalSuccess
          title="Avaliação criada com sucesso!"
          description="Clique no botão para ser redirecionado para a propriedade."
          handleCloseModal={() => setIsOpen(false)}
          isOpen={isOpen}
          href={`/properties/${router.query.slug}`}
        />
      </Dialog.Root>
      <Heading level={1} weight="medium">
        Avalie a propriedade
      </Heading>
      <S.Description>
        Escreva um comentário e avalie a propriedade que você alugou.
      </S.Description>

      <S.InputContainer>
        <Ratings
          setRating={setRating}
          setHoverRating={setHoverRating}
          rating={rating}
          hoverRating={hoverRating}
        />
        <Input
          variant="outlined"
          label="Título"
          errorMessage={errors.title?.message}
          {...register('title')}
        />
        <S.Textarea>
          <label htmlFor="description">Descrição</label>
          <textarea {...register('description')} />
          {!!errors.description && (
            <span className="error">
              <MdErrorOutline size={18} color="#C10000" />

              {errors.description.message}
            </span>
          )}
        </S.Textarea>
        <Button type="submit">Enviar avaliação</Button>
      </S.InputContainer>
    </S.Wrapper>
  )
}

Review.getLayout = function (page: ReactElement) {
  return <AppWrapper>{page}</AppWrapper>
}
