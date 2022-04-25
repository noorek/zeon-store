import React, { useEffect, useState } from 'react'
import './Sale.scss'
import { urlFor, client } from '../../client'

const Sale = () => {
	const [sale, setSale] = useState([])

	useEffect(() => {
		const query = '*[_type == "sale"]'

		client.fetch(query).then(data => {
			setSale(data)
		})
	}, [])

	return (
		<div className="sale">
			<div className="container">
				<h2 className="sale__heading">Хит продаж</h2>
				<div className="sale__items">
					{sale.map((item, index) => (
						<>
							<div className="sale__items-item" key={index}>
								<img src={urlFor(item.imgUrl)} alt="" />
								<p>{item.name}</p>
								<h2>{item.price}</h2>
								<h4>Размер: {item.size}</h4>
								<div className="sale__items-color">
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
				<button className="sale__ending">Еще</button>
			</div>
		</div>
	)
}

export default Sale
