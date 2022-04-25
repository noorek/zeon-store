import React, { useEffect, useState } from 'react'
import './Collections.scss'
import { urlFor, client } from '../../client'
import { IoIosArrowForward } from 'react-icons/io'

const Collections = () => {
	const [collections, setCollections] = useState([])

	useEffect(() => {
		const query = '*[_type == "collection"]'

		client.fetch(query).then(data => {
			setCollections(data)
		})
	}, [])

	return (
		<div className="collections">
			<div className="container">
				<div className="collections__block">
					<h2 className="collections__heading">Коллекция</h2>
					<div className="collections_items">
						{collections.map((item, index) => (
							<>
								<div key={index} className="collections__item">
									<img src={urlFor(item.imgUrl).url()} alt="" />
									<h2>{item.name}</h2>
									<a href="#">
										Смотреть все <IoIosArrowForward />
									</a>
								</div>
							</>
						))}
					</div>
					<button className="collections__ending">Еще</button>
				</div>
			</div>
		</div>
	)
}

export default Collections
