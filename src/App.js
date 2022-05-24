import './App.css';
import ListadoPeliculas from './ListadoPeliculas';

function App() {

	return (
		<switch>
			<Route path="/blog">
				<ListadoPeliculas />
			</Route>
			
			<Route path="/">
				<ListadoPeliculas />
			</Route>
		</switch>
	);
}

export default App;
{/** continuar video desde minuto 02:49:15 */}