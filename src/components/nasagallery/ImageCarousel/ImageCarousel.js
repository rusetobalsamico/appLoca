// importo react. Siempre importar React
import React from 'react';
// importo la hoja de estilos de ImageCarousel.css
import './ImageCarousel.css';
// importo Thumb 
import Thumb from './Thumb';
// importo NavButton 
import NavButton from './NavButton';

// Creo el modulo NASAGallery
const ImageCarousel = () => {
	return(
		<div className="ImageCarousel-container">
			<NavButton label="<<" />
			<Thumb />
			<Thumb />
			<Thumb />
			{/* <Thumb ASI SE COMENTA /> */}
			<Thumb />
			<Thumb />
			<NavButton label=">>" />
		</div>
	);
}


export default ImageCarousel;