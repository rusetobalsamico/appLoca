// importo react. Siempre importar React
import React from 'react';

// Creo el modulo Thumb
function NavButton(props) {
	return(
		<button className="carousel-navbutton" type="button">{props.label}</button>
	);
};


export default NavButton;