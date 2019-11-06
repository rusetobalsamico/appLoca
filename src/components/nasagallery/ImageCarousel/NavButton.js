// importo react. Siempre importar React
import React from 'react';
// importo la hoja de estilos de Thumb.css
import './NavButton.css';

// Creo el modulo Thumb
const NavButton = (props) => {
	return(
		<button className="carousel-navbutton" type="button">{props.label}</button>
	);
}


export default NavButton;