import React, { useEffect, useState } from 'react'
import './Header.scss'
import { urlFor, client } from '../../client'
import { BiHeart, BiSearchAlt2, BiBasket } from 'react-icons/bi'

import { NavLink } from 'react-router-dom'
import { HiX, HiMenuAlt4 } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Header = () => {
	const [navbar, setNavbar] = useState([])

	useEffect(() => {
		const query = '*[_type == "navbar"]'

		client.fetch(query).then(data => {
			setNavbar(data)
		})
	}, [])

	const [toggle, setToggle] = useState(false)

	return (
		<div className="header">
			<div className="container">
				<div className="header__main">
					<navbar className="header__navbar">
						<div className="header__navbar-left">
							<ul>
								<li>
									<NavLink to="about">О нас</NavLink>
								</li>
								<li>
									<NavLink to="/collection">Коллекции</NavLink>
								</li>
								<li>
									<NavLink to="news">Новости</NavLink>
								</li>
							</ul>
						</div>
						<div className="header__navbar-right">
							{navbar.map((telNum, index) => (
								<>
									<a key={index} href="tel: +996 000 00 00 00">
										Тел: <span>{telNum.telNum}</span>
									</a>
								</>
							))}
						</div>
					</navbar>
					<div className="header__navbar-menu">
						<HiMenuAlt4 onClick={() => setToggle(true)} />

						{toggle && (
							<motion.div
								whileInView={{ x: [-300, 0] }}
								transition={{ duration: 0.85, ease: 'easeOut' }}
								className="motion_div"
							>
								<div className="header__navbar-menu-top">
									<div className="header__navbar-menu-nav">
										<h3>Меню</h3>
										<HiX onClick={() => setToggle(false)}></HiX>
									</div>

									<ul>
										<li>
											<NavLink to="about">О нас</NavLink>
										</li>
										<li>
											<NavLink to="/collection">Коллекции</NavLink>
										</li>
										<li>
											<NavLink to="/news">Новости</NavLink>
										</li>
										<li>
											<NavLink to="/favorite">
												<BiHeart /> Избранное
											</NavLink>
										</li>
										<li>
											<NavLink to="/basket">
												<BiBasket /> Корзина
											</NavLink>
										</li>
									</ul>
								</div>

								<div className="header__navbar-menu-contact">
									<h3>Свяжитесь с нами:</h3>
									{navbar.map((telNum, index) => (
										<a key={index} href="tel: +996 000 00 00 00">
											Тел: <span>{telNum.telNum}</span>
										</a>
									))}
								</div>
							</motion.div>
						)}
					</div>
					<div className="header__block">
						{navbar.map((logo, index) => (
							<>
								<NavLink to="/">
									<img key={index} src={urlFor(logo.imgUrl).url()} alt="logo" />
								</NavLink>
								<div className="pt-site-footer__submit">
									<input type="text" placeholder="Поиск" />
									<NavLink className="basket__link" to="/basket">
										<BiSearchAlt2 />
									</NavLink>
								</div>
								<div className="header__block-links">
									<NavLink to="/favorite">
										<BiHeart /> Избранное
									</NavLink>
									<NavLink to="/basket">
										<BiBasket /> Корзина
									</NavLink>
								</div>
							</>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
