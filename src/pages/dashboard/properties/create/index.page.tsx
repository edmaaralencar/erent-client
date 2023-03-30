import { ReactElement, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { AnimatePresence } from 'framer-motion'
import { useMutation } from '@tanstack/react-query'
import { MdErrorOutline } from 'react-icons/md'
import * as Dialog from '@radix-ui/react-dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'

import { useOptions } from '@/services/hooks/use-options'
import { queryClient } from '@/lib/query-client'
import { withSSRAuth } from '@/utils/with-ssr-auth'
import { api } from '@/services/api'

import DashboardWrapper from '@/components/DashboardWrapper'
import Input from '@/components/Input'
import FormWrapper from '@/components/FormWrapper'
import FileInput from '@/components/FileInput'
import ModalSuccess from '@/components/ModalSuccess'

import * as S from './styles'

const createPropertySchema = z.object({
  name: z.string().min(1, { message: 'Nome da propriedade obrigatória.' }),
  description: z.string().min(1, { message: 'Descrição obrigatória.' }),
  city: z.string().min(1, { message: 'Cidade obrigatória.' }),
  region: z.string().min(1, { message: 'Região obrigatória.' }),
  daily_price: z.number({
    required_error: 'Quantidade de quartos obrigatória.',
    invalid_type_error: 'Você deve especificar um número.'
  }),
  rooms: z.number({
    required_error: 'Quantidade de quartos obrigatória.',
    invalid_type_error: 'Você deve especificar um número.'
  }),
  bathrooms: z.number({
    required_error: 'Quantidade de banheiros obrigatório.',
    invalid_type_error: 'Você deve especificar um número.'
  }),
  size: z.number({
    required_error: 'Tamanho obrigatório.',
    invalid_type_error: 'Você deve especificar um número.'
  }),
  capacity: z.number({
    required_error: 'Capacidade obrigatória.',
    invalid_type_error: 'Você deve especificar um número.'
  })
})

type CreatePropertyFormData = z.infer<typeof createPropertySchema>

type Option = {
  name: string
  id: string
  filename: string
  createdAt: string
  imageUrl: string
}

export default function CreateProperty() {
  const filesElement = useRef<any>(null)
  const [images, setImages] = useState<{ fileName: string; size: number }[]>([])
  const [isOptionMenuOpen, setIsOptionMenuOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<CreatePropertyFormData>({
    resolver: zodResolver(createPropertySchema)
  })

  const { data } = useOptions()

  const createProperty = useMutation(
    async (data: FormData) => {
      await api({
        endpoint: '/properties',
        method: 'POST',
        body: data,
        upload: true
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['properties'])
        setIsOpen(true)
      }
    }
  )

  async function handleCreateProperty(data: any) {
    const formData = new FormData()

    for (const file of filesElement.current.files) {
      formData.append('image', file)
    }

    for (const key in data) {
      formData.append(key, String(data[key]))
    }

    formData.append(
      'options',
      JSON.stringify({
        options: selectedOptions.map(option => ({ id: option.id }))
      })
    )

    await createProperty.mutateAsync(formData)
  }

  async function handleAddImages() {
    const formData = new FormData()

    for (const file of filesElement?.current?.files) {
      formData.append('file', file)
    }

    const files = Array.from(formData)

    setImages(
      files.map((file: any) => {
        const fileFormatted = {
          fileName: file[1].name,
          size: file[1].size
        }
        return fileFormatted
      })
    )
  }

  function handleAddOption(option: Option) {
    if (selectedOptions.some(item => item.id === option.id)) {
      setSelectedOptions(prevState =>
        prevState.filter(item => item.id !== option.id)
      )
      return
    }
    setSelectedOptions(prevState => [...prevState, option])
  }

  return (
    <S.Wrapper>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <ModalSuccess
          title="Propriedade criada com sucesso!"
          description="Clique no botão para ser redirecionado para a página de propriedades."
          handleCloseModal={() => setIsOpen(false)}
          isOpen={isOpen}
          href="/dashboard/properties"
        />
      </Dialog.Root>
      <FormWrapper
        cancelHref="/dashboard/properties"
        onSubmit={handleSubmit(handleCreateProperty)}
        isSubmitting={isSubmitting}
      >
        <Input
          variant="normal"
          label="Nome da propriedade"
          errorMessage={errors.name?.message}
          {...register('name')}
        />
        <FileInput
          images={images}
          onAddImage={handleAddImages}
          ref={filesElement}
        />
        <S.OptionsContainer>
          <S.OptionButton
            onClick={() => setIsOptionMenuOpen(prevState => !prevState)}
            type="button"
          >
            Escolha as opções presentes na propriedade
            <motion.div
              animate={isOptionMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.1 }}
            >
              <svg fill="#05142b" width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </motion.div>
          </S.OptionButton>
          <AnimatePresence>
            {isOptionMenuOpen && (
              <S.Options
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.2
                }}
                exit={{ opacity: 0, x: -20 }}
              >
                {data?.options?.map(option => (
                  <S.Option
                    type="button"
                    key={option.id}
                    onClick={() => handleAddOption(option)}
                    isOptionSelected={selectedOptions.some(
                      item => item.id === option.id
                    )}
                  >
                    {option.name}
                  </S.Option>
                ))}
              </S.Options>
            )}
          </AnimatePresence>
        </S.OptionsContainer>
        <Input
          variant="normal"
          label="Cidade"
          errorMessage={errors.city?.message}
          {...register('city')}
        />
        <Input
          variant="normal"
          label="Região"
          errorMessage={errors.region?.message}
          {...register('region')}
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
        <Input
          variant="normal"
          label="Diária"
          errorMessage={errors.daily_price?.message}
          type="number"
          {...register('daily_price', { valueAsNumber: true })}
        />
        <Input
          variant="normal"
          label="Capacidade"
          errorMessage={errors.capacity?.message}
          type="number"
          {...register('capacity', { valueAsNumber: true })}
        />
        <Input
          variant="normal"
          label="Tamanho (em m2)"
          errorMessage={errors.size?.message}
          type="number"
          {...register('size', { valueAsNumber: true })}
        />
        <Input
          variant="normal"
          label="Quartos"
          errorMessage={errors.rooms?.message}
          type="number"
          {...register('rooms', { valueAsNumber: true })}
        />
        <Input
          variant="normal"
          label="Banheiros"
          errorMessage={errors.bathrooms?.message}
          type="number"
          {...register('bathrooms', { valueAsNumber: true })}
        />
      </FormWrapper>
    </S.Wrapper>
  )
}

CreateProperty.getLayout = function (page: ReactElement) {
  return <DashboardWrapper title="Criar propriedade">{page}</DashboardWrapper>
}

export const getServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {}
  }
}, {
  isAdmin: true
})