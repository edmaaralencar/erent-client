import Image from 'next/image'
import { Settings } from 'react-slick'

import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import Slider from '@/components/Slider'
import Stats from '@/components/Stats'
import TypeCard from '@/components/TypeCard'
import Heading from '@/components/Heading'
import { Container } from '@/components/Container'
import PropertyCard from '@/components/PropertyCard'

import { CONTAINER_ANIMATION, DIVIDER_ANIMATION } from '@/utils/animations'
import { testimonials } from './constants'

import * as S from './styles'
import { HomeProps } from '../index.page'
import Link from 'next/link'

export function Home({ properties, totalCountOfProperties }: HomeProps) {
  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <>
      <Hero />
      <Stats />

      <Container>
        <S.TypeContainer
          variants={CONTAINER_ANIMATION({})}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <TypeCard
            name="Casas"
            description="Veja as casas mais requisitadas do mercado."
            type="house"
            href="/"
          />
          <TypeCard
            name="Prédios"
            description="Veja os apartamentos mais requisitados do mercado."
            type="house"
            href="/"
          />
        </S.TypeContainer>
      </Container>

      <Container>
        <S.PropertiesWrapper>
          <S.Title>
            <div>
              <Heading level={2} weight="semibold">
                Propriedades mais recentes
              </Heading>
              <Link href="/properties">Ver mais</Link>
            </div>
            <S.Hr
              variants={DIVIDER_ANIMATION}
              initial="hidden"
              animate="show"
            />
          </S.Title>

          <S.PropertiesContainer
            variants={CONTAINER_ANIMATION({})}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {properties?.slice(0, 6).map(property => (
              <PropertyCard
                key={property.id}
                image={property.images[0].url}
                name={property.name}
                id={property.id}
                bathrooms={property.bathrooms}
                rooms={property.rooms}
                city={property.city}
                dailyPrice={property.dailyPrice}
                size={property.size}
              />
            ))}
          </S.PropertiesContainer>
        </S.PropertiesWrapper>
      </Container>

      <S.Testimonials>
        <Container>
          <Slider settings={settings}>
            {testimonials.map((testimonial, index) => (
              <S.Testimonial key={index}>
                {/* <Image layout="fill" src={img.image_url} /> */}
                <S.TestimonialContent>
                  <h4>{testimonial.title}</h4>
                  <p>{testimonial.description}</p>
                </S.TestimonialContent>
                <S.TestimonialInfo>
                  <div className="flex">
                    <Image
                      src="/avatar.png"
                      alt="Avatar Image"
                      width={56}
                      height={56}
                    />
                    <S.Perfil className="perfil">
                      <strong>{testimonial.user.name}</strong>
                      <small>{testimonial.user.company}</small>
                    </S.Perfil>
                  </div>
                </S.TestimonialInfo>
              </S.Testimonial>
            ))}
          </Slider>
        </Container>
      </S.Testimonials>

      <Container>
        <Faq />
      </Container>
    </>
  )
}
