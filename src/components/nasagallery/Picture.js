// importo react. Siempre importar React
import React from 'react';

// importo la hoja de estilos de Picture.css
import './Picture.css';

// Creo el modulo Picture
function Picture(props) {
	return(
		<img className="mainPicture" src={props.imgUrl} alt="Imagen no encontrada"/>
	);
};

// Asi se crea un componente
// class Picture extends React.Component {
// 	render() {
// 		return <img style={props.estilos} src="" alt="Imagen no encontrada"/>
// 	}
// }


export default Picture;