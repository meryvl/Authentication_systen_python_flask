import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (



		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/">
					<span className="Encabezado d-flex justify-content-start navbar-brand mb-0 h1"> 
					
		<img className="iconoWeb" src="https://img.icons8.com/ios-filled/50/000000/gopro.png"/>
        <h2 className="text-white px-2">My Web</h2></span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary m-2">Iniciar sesion</button>
					</Link>
					<Link to="/CreateUser">
						<button className="btn btn-primary">Crear Usuario</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
