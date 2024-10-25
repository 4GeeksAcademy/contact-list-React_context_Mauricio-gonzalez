// src/layout.js

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Contact from "./views/Contact";
import AddContact from "./views/AddContact";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import injectContext from "./store/appContext";

// Importa el componente Demo
import { Demo } from "./views/demo";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						{/* Rutas principales */}
						<Route path="/" element={<Contact />} />
						<Route path="/add-contact" element={<AddContact />} />
						<Route path="/edit-contact/:contactId" element={<AddContact />} />

						{/* Ruta para la vista Demo */}
						<Route path="/demo" element={<Demo />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);