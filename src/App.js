import { useState } from 'react';
import './App.css';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import Pelicula from './Pelicula';
import peliculasJson from './peliculas.json';

function App() {

	let peliculas = [
		{
			titulo: "oblivion (2012)",
			calificacion: "8.1",
			director: "Joss Whedon", 
			actores: "Robert Downey Jr., Chris Evans, Chris Hemsworth", 
			fecha: "1 de Mayo 2015", 
			duracion: "2h 21min",
			img: "images/uploads/mv1.jpg",
			descripcion: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity..."
		},
		{
			titulo: "into the wild (2014)",
			calificacion: "7.8",
			director: "Anthony Russo, Joe Russo", 
			actores: "Chris Evans, Samuel L. Jackson, Scarlett Johansson", 
			fecha: "1 de Mayo 2015", 
			duracion: "2h 21min",
			img: "images/uploads/mv2.jpg",
			descripcion: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity..."
		},
		{
			titulo: "BLADE RUNNER (2015)",
			calificacion: "7.3",
			director: "Peyton Reed", 
			actores: "Paul Rudd, Michael Douglas", 
			fecha: "1 de Mayo 2015", 
			duracion: "2h 21min",
			img: "images/uploads/mv3.jpg",
			descripcion: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help..."
		},
		{
			titulo: "MULHOLLAND PRIDE (2013)",
			calificacion: "7.2",
			director: "Shane Black", 
			actores: "Robert Downey Jr., Guy Pearce, Don Cheadle", 
			fecha: "1 de Mayo 2015", 
			duracion: "2h 21min",
			img: "images/uploads/mv4.jpg",
			descripcion: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution."
		},
		{
			titulo: "SKYFALL: EVIL OF BOSS (2013)",
			calificacion: "7.0",
			director: "Alan Taylor", 
			actores: "Chris Hemsworth, Natalie Portman, Tom Hiddleston", 
			fecha: "1 de Mayo 2015", 
			duracion: "2h 21min",
			img: "images/uploads/mv5.jpg",
			descripcion: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution."
		}
	];
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