import { ReactElement, useRef, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import DashboardWrapper from '@/components/DashboardWrapper'
import Input from '@/components/Input'
import FormWrapper from '@/components/FormWrapper'

import * as S from './styles'
import FileInput from '@/components/FileInput'
import { api } from '@/services/api'
import * as Dialog from '@radix-ui/react-dialog'
import ModalSuccess from '@/components/ModalSuccess'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/lib/query-client'
import { toast } from 'react-toastify'
import ToastMessage from '@/components/ToastMessage'
import { withSSRAuth } from '@/utils/with-ssr-auth'

const createOptionSchema = z.object({
  name: z.string().min(1, { message: 'Nome da opção obrigatória.' })
})

type CreateOptionFormData = z.infer<typeof createOptionSchema>

export default function CreateOption() {
  const fileElement = useRef<any>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [image, setImage] = useState<{ fileName: string; size: number }>()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<CreateOptionFormData>({
    resolver: zodResolver(createOptionSchema)
  })

  const createOption = useMutation(
    async (formData: FormData) => {
      const response = await api({
        endpoint: '/options',
        method: 'POST',
        body: formData,
        upload: true
      })

      return response
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['options'])
        setIsOpen(true)
      }
    }
  )

  async function handleCreateOption(data: CreateOptionFormData) {
    const formData = new FormData()

    formData.append('image', fileElement?.current?.files[0])
    formData.append('name', data.name)

    if (!fileElement.current.files[0]) {
      toast.error(
        <ToastMessage
          title="Ocorreu um erro."
          description="Escolha uma imagem."
        />
      )
      return
    }

    createOption.mutateAsync(formData)
  }

  return (
    <S.Wrapper>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <ModalSuccess
          title="Opção criada com sucesso!"
          description="Clique no botão para ser redirecionado para a página de opções."
          handleCloseModal={() => setIsOpen(false)}
          isOpen={isOpen}
          href="/dashboard/options"
        />
      </Dialog.Root>
      <FormWrapper
        cancelHref="/dashboard/options"
        onSubmit={handleSubmit(handleCreateOption)}
        isSubmitting={isSubmitting}
      >
        <Input
          variant="normal"
          label="Nome da opção"
          errorMessage={errors.name?.message}
          {...register('name')}
        />
        <S.Upload>
          <input
            ref={fileElement}
            onChange={() =>
              setImage({
                fileName: fileElement?.current?.files[0].name,
                size: fileElement?.current?.files[0].size
              })
            }
            type="file"
            id="upload-button"
            hidden
          />
          <label className="upload-label" htmlFor="">
            Imagem
          </label>
          <label className="upload-button" htmlFor="upload-button">
            + Adicionar uma foto
          </label>
        </S.Upload>
        {image && (
          <S.ListImages>
            <li>
              {image.fileName} - {image.size} bytes
            </li>
          </S.ListImages>
        )}
      </FormWrapper>
    </S.Wrapper>
  )
}

CreateOption.getLayout = function (page: ReactElement) {
  return <DashboardWrapper title="Criar opção">{page}</DashboardWrapper>
}

export const getServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {}
  }
}, {
  isAdmin: true
})