import { useState } from 'react';
import './App.css';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import Pelicula from './Pelicula';
import peliculasJson from './peliculas.json';

function App() {

	let peliculas = peliculasJson;
//Lo que hace la funcion es recorrer el array de peliculas
	// for (var i = 0; i < peliculas.length; i++)
	// peliculas.forEach(pelicula => {
	// 	alert(pelicula.titulo)
	// })
//En lugar de forEach, se puede usar el map para recorrer el array. El forEach recorre cada una de las peliculas y ejecuta una acción. En cambio el map recorre cada una de las peliculas y a la vez va a devolver alguna cosa. En este caso devualve código html para renderizar. Por ejemplo cuando se active la arrow function y recorra cada una de las peliculas, regresará el string de "asdas",
	var arreglo = peliculas.map(pelicula => {
		alert(pelicula.titulo)
		//return "asdas";
	})

	return (
		<PageWrapper>

			{peliculas.map(pelicula => 
				<Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
					director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}
					img={pelicula.img}>
					{pelicula.descripcion}
				</Pelicula>

			)}


		</PageWrapper>
	);
}

export default App;
//Continuar video desde minuto 01:45:41