import React, { useState, useEffect } from 'react'
import './Novelties.scss'
import { urlFor, client } from '../../client'

const Novelties = () => {
	const [novelties, setNovelties] = useState([])

	useEffect(() => {
		const query = '*[_type == "novelties"]'

		client.fetch(query).then(data => {
			setNovelties(data)
		})
	}, [])

	return (
		<div className="novelties">
			<div className="container">
				<h2 className="novelties__heading">Новинки</h2>
				<div className="novelties__items">
					{novelties.map((item, index) => (
						<>
							<div className="novelties__items-item" key={index}>
								<img src={urlFor(item.imgUrl)} alt="" />
								<p>{item.name}</p>
								<h2>{item.price}</h2>
								<h4>Размер: {item.size}</h4>
								<div className="novelties__items-color">
									<button className="dot green"></button>
									<button className="dot lGreen"></button>
									<button className="dot lBrown"></button>
									<button className="dot brown"></button>
									<button className="dot blue"></button>
									<button className="dot white"></button>
									<button className="dot black"></button>
									<button className="dot orange"></button>
								</div>
							</div>
						</>
					))}
				</div>
				<button className="novelties__ending">Еще</button>
			</div>
		</div>
	)
}

export default Novelties
