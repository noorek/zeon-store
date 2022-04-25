import React, { useEffect, useState } from 'react'
import { urlFor, client } from '../../client'
import './Advantage.scss'

const Advantage = () => {
	const [advantage, setAdvantage] = useState([])

	useEffect(() => {
		const query = '*[_type == "advantage"]'

		client.fetch(query).then(data => {
			setAdvantage(data)
		})
	}, [])
	return (
		<div className="advantage">
			<div className="container">
				<div className="advantage__block">
					<div className="advantage__heading">Наши преимущества</div>
					<div className="advantage__items">
						{advantage.map((item, index) => (
							<>
								<div key={index} className="advantage__item">
									<img src={urlFor(item.imgUrl).url()} alt="" />
									<h2>{item.name}</h2>
									<p>{item.desc}</p>
								</div>
							</>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Advantage
