// importo react. Siempre importar React
import React from 'react';

// importo la hoja de estilos de Picture.css
import './Picture.css';

// Creo el modulo Picture
function Picture(props) {
	return(
		<img style={props.estilos} src="" alt="Imagen no encontrada"/>
	);
};


export default Picture;