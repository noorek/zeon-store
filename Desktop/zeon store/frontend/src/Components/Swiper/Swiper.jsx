import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

import './Swiper.scss'

const Slider = () => {
	return (
		<Swiper
			modules={[Pagination, Autoplay]}
			centeredSlides={true}
			centeredSlidesBounds={true}
			slidesPerView={1}
			autoplay={{ delay: 3000 }}
			pagination={{ clickable: true }}
			onSlideChange={() => console.log('slide change')}
			onSwiper={swiper => console.log(swiper)}
			className="myswiper"
		>
			<SwiperSlide className="swiperslide">
				<img src="./images/slide.png" alt="" />
			</SwiperSlide>
			<SwiperSlide className="swiperslide">
				<img src="./images/slide.png" alt="" />
			</SwiperSlide>
			<SwiperSlide className="swiperslide">
				<img src="./images/slide.png" alt="" />
			</SwiperSlide>
			<SwiperSlide className="swiperslide">
				<img src="./images/slide.png" alt="" />
			</SwiperSlide>
		</Swiper>
	)
}

export default Slider
