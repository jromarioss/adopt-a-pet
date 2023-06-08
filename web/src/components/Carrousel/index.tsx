import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import './styles.css'
import { Container, CarrouselImage } from './styles' 

import Image01 from '../../assets/img/image01.jpg'
import Image02 from '../../assets/img/image02.jpg'
import Image03 from '../../assets/img/image03.jpg'
import Image04 from '../../assets/img/image04.jpg'

export function Carrousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
  }) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }

  return (
    <Container>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <CarrouselImage className="keen-slider__slide">
            <img src={Image01} />
          </CarrouselImage>
          <CarrouselImage className="keen-slider__slide">
            <img src={Image02} />
          </CarrouselImage>
          <CarrouselImage className="keen-slider__slide">
            <img src={Image03} />
          </CarrouselImage>
          <CarrouselImage className="keen-slider__slide">
            <img src={Image04} />
          </CarrouselImage>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </Container>
  )
}
