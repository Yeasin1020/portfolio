import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Home/Footer/Footer';
import NavBar from '../Home/Home/Nevbar/Navbar';

const Main = () => {
	return (
		<div>
			<NavBar></NavBar>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;