import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import ListadoPeliculas from './ListadoPeliculas';

function App() {

	return (
		<BrowserRouter>
			<switch>
				<Route path="/blog">
					<Blog />
				</Route>

				<Route path="/">
					<ListadoPeliculas />
				</Route>
			</switch>
		</BrowserRouter>
	);
}

export default App;
{/** continuar video desde minuto 02:49:15 */}