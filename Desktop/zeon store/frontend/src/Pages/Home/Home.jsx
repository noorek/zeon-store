import React from 'react'
import Slider from '../../Components/Swiper/Swiper'
import Sale from '../../Components/Sale/Sale'
import Novelties from '../../Components/Novelties/Novelties'
import Collections from '../../Components/Collection/Collections'
import Advantage from '../../Components/Advantage/Advantage'

const Home = () => {
	return (
		<div>
			<Slider />
			<Sale />
			<Novelties />
			<Collections />
			<Advantage />
		</div>
	)
}

export default Home
