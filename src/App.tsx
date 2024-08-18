import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Error, Home } from './pages';
import Layout from './Layouts/Layout';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='contact' element={<h1>Contact page!!!</h1>}/>
				</Route>
				<Route path='*' element={<Error/>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
