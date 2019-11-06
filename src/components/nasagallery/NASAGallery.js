// importo react. Siempre importar React
import React from 'react';
// importo Picture 
import Picture from './Picture';
// importo ImageCarousel 
import ImageCarousel from './ImageCarousel/ImageCarousel';
// importo NavButton 
import NavButton from './ImageCarousel/NavButton';

// importo la hoja de estilos de NASAGallery.css
import './NASAGallery.css';

// Creo el componente NASAGallery que es una extension de React.Component
class NASAGalery extends React.Component {
	// Propiedad de estado
	state = {
		isLoading: true,
		data: null
	}

	fetchNasaData = () => {
		fetch('https://api.nasa.gov/planetary/apod?api_key=b04xlM1fWlGgcmQGGreHC46klN7kEcmFCT6I3UYB')
		.then( (res) => {
			return res.json();
		})
		.then( (json) => {
			// console.log(json);
			this.setState({
				data: json,
				isLoading: false
			})
		})
	}

	componentDidMount() {
		this.fetchNasaData();
	}

	render() {
		
		// Deacuerdo al estado te muestro una cosa o te muestro otra
		if(this.state.isLoading === true) {
			return <div>Estamos haciendo la pegada al servidor</div>
		}

		return(
			<div className="nasa-gallery-container">
				<Picture imgUrl={this.state.data.url}/>
				<ImageCarousel />
			</div>
		);

	}

};


export default NASAGalery;