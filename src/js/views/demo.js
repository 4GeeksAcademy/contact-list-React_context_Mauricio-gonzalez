// src/views/Demo.js

import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Demo = () => {
	const { store } = useContext(Context);

	return (
		<div>
			<h1>Demo</h1>
			{store.demo && store.demo.length > 0 ? (
				store.demo.map((item, index) => (
					<div key={index}>
						<h2>{item.title}</h2>
						<p>Background color: {item.background}</p>
					</div>
				))
			) : (
				<p>No hay elementos en demo.</p>
			)}
		</div>
	);
};