// importamos REACT
import React from 'react';
// importo los estilos de ese componentre
import './Header.css';

// Creo el modulo Header
const Header = () => {
	return(
		<header className="App-header">
			<div className="container flex">
				<div className="App-logo">
					
				</div>
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Nosotros</a></li>
					<li><a href="#">Contacto</a></li>
				</ul>
			</div>
		</header>
	);
}

export default Header;



