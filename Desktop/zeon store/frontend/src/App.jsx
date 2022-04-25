import React from 'react'
import './App.scss'
import Header from './Components/Header/Header'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Collection from './Pages/Collection/Collection'
import About from './Pages/About/About'
import News from './Pages/News/News'
import Favorite from './Pages/Favorite/Favorite'
import Home from './Pages/Home/Home'
import Basket from './Pages/Basket/Basket'
import Footer from './Components/Footer/Footer'

const App = () => {
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route path="/about" exact element={<About></About>}></Route>
					<Route
						path="/collection"
						exact
						element={<Collection></Collection>}
					></Route>
					<Route path="/news" exact element={<News></News>}></Route>
					<Route path="/home" exact element={<Home></Home>}></Route>
					<Route path="/favorite" exact element={<Favorite></Favorite>}></Route>
					<Route path="/basket" exact element={<Basket></Basket>}></Route>
				</Routes>
				<Home />
				<Footer />
			</Router>
		</div>
	)
}

export default App
