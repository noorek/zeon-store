import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="footer__block">
					<img src="./images/logo2.png" alt="" />
					<div className="footer__block-info">
						<div className="footer__block-line">
							<h2>Компания</h2>
							<NavLink to="about">О нас</NavLink>
							<NavLink to="news">Новости</NavLink>
							<NavLink to="/help">Помощь</NavLink>
						</div>
						<div className="footer__block-line">
							<h2>Контакты</h2>
							<a href="tel: +996 500 123 456">+996 500 123 456</a>
							<a href="tel: +996 500 123 456">+996 500 123 456</a>
							<a href="mailto: mail@gmail.com">mail@gmail.com</a>
						</div>
						<div className="footer__block-line">
							<h2>Мы в социальных сетях:</h2>
							<a href="http://">
								<img src="./images/instagram.png" alt="instagramm" />
								Instagram
							</a>
							<a href="http://">
								<img src="./images/telegram.png" alt="telegram" />
								Telegram
							</a>
							<a href="http://">
								<img src="./images/whatsapp.png" alt="whatsapp" />
								Whatsapp
							</a>
						</div>
					</div>
				</div>
				<p className="footer__ending">Developed by Zeon 2022</p>
			</div>
		</div>
	)
}

export default Footer
