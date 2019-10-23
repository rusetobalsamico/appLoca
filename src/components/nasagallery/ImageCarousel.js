// importo react. Siempre importar React
import React from 'react';

// importo la hoja de estilos de ImageCarousel.css


// importo NavButton 
import NavButton from './NavButton';

// importo Thumb 
import Thumb from './Thumb';

// Creo el modulo NASAGallery
function ImageCarousel() {
	return(
		<div>
			<NavButton label="<" />
			<Thumb />
			<Thumb />
			<Thumb />
			{/* <Thumb ASI SE COMENTA /> */}
			<Thumb />
			<Thumb />
			<NavButton label=">" />
		</div>
	);
};


export default ImageCarousel;