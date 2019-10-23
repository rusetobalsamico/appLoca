// importo react. Siempre importar React
import React from 'react';

// importo la hoja de estilos de NASAGallery.css
import './NASAGallery.css';

// importo Picture 
import Picture from './Picture';

// importo ImageCarousel 
import ImageCarousel from './ImageCarousel/ImageCarousel';

// importo NavButton 
import NavButton from './ImageCarousel/NavButton';

// Creo el modulo NASAGallery
function NASAGalery() {
	const objetoEstilos = {
		'color': 'red',
		'backgroundColor': 'blue',
		'width': '300px',
		'height': '500px'
	}
	return(
		<div className="nasa-gallery-container">
			<Picture estilos={objetoEstilos} />
			<ImageCarousel />
			<NavButton label="cualquier cosa" />
		</div>
	);
};


export default NASAGalery;