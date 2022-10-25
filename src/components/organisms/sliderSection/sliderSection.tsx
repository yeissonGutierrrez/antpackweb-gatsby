import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import './sliderSection.scss'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { StaticImage } from "gatsby-plugin-image"

import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper';
import SliderInfo from '@/components/molecules/sliderInfo/sliderInfo'

SwiperCore.use([Pagination, Navigation, Autoplay]);

const mubico = ['Platform', 'Website']

export default function SliderSection() {
  return (
    <Swiper
      className='banner_slider_container'
      direction={'vertical'}
      grabCursor={true}
      onSliderMove={() => console.log('movee')}
      // onSlideChange={() => alert('slide change')}
      onSlideChangeTransitionStart={() => {
        let currentImage: any = document.querySelector('.backgroundImage')
        currentImage.style.scale = 2
        console.log(currentImage)
      }}
      loop={true}
      pagination={{
        "clickable": true
      }}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide className='bannerSlider'>
        <SliderInfo date='2022' name='mubico' colorText='black' categories={mubico} />
        <StaticImage
          src='../../../assets/images/sliderImages/mubicoScreen.jpg'
          alt="A dinosaur"
          placeholder="blurred"
          className='backgroundImage'
        />
      </SwiperSlide>

      <SwiperSlide className='bannerSlider'>
        <SliderInfo date='2022' name='hbo' colorText='white' categories={mubico} />
        <StaticImage
          src='../../../assets/images/sliderImages/hboScreen.jpg'
          alt="A dinosaur"
          placeholder="blurred"
          className='backgroundImage'
        />
      </SwiperSlide>


      <SwiperSlide className='bannerSlider'>
        <SliderInfo date='2022' name='verdi' colorText='white' categories={mubico} />
        <StaticImage
          src='../../../assets/images/sliderImages/verdiScreen.jpg'
          alt="A dinosaur"
          placeholder="blurred"
          className='backgroundImage'
        />
      </SwiperSlide>

      <SwiperSlide className='bannerSlider'>
        <SliderInfo date='2022' name='siigo' colorText='white' categories={mubico} />
        <StaticImage
          src='../../../assets/images/sliderImages/sigoScreen.jpg'
          alt="A dinosaur"
          placeholder="blurred"
          className='backgroundImage'
        />
      </SwiperSlide>
    </Swiper >
  )
}