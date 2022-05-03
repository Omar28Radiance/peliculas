import { useState } from 'react';
import './App.css';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import Pelicula from './Pelicula';
import peliculasJson from './peliculas.json';

function App() {

	const [paginaActual, setPaginaActual] = useState(1);
	const TOTAL_POR_PAGINA = 7;

	let peliculas = peliculasJson;

	const buscarPeliculas = () => {
		let url = 'https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/main/Proyecto%202%20-%20Web%20de%20Peliculas/Peliculas/Proyecto%20Terminado/src/epliculas.js';

		fetch(url, {
			"method": 'GET', "headers": {
				"Accept": 'application/json',
				"Content-Type": 'application/json'
			}
		})
	}

	const cargarPeliculas = () => {
		peliculas = peliculas.slice(
			(paginaActual - 1) * TOTAL_POR_PAGINA,
			paginaActual * TOTAL_POR_PAGINA
		);
	}

	const getTotalPaginas = () => {
		let cantidadTotaldePeliculas = peliculasJson.length;
		return MATH.ceil(cantidadTotaldePeliculas / TOTAL_POR_PAGINA);
	}

	cargarPeliculas();

	return (
		<PageWrapper>

			{peliculas.map(pelicula =>
				<Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
					director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha}
					duracion={pelicula.duracion} img={pelicula.img}>
					{pelicula.descripcion}
				</Pelicula>
			)}

			<Paginacion pagina={paginaActual} total={getTotalPaginas} 
			onChange={(pagina) => {
				setPaginaActual(pagina)
			}} />

		</PageWrapper>
	);
}

export default App;
