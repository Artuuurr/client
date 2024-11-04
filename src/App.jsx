import './App.css'
import Homepage from './components/layout/Homepage'
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom'
import Admin from '../src/components/page/admin'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/admin' element={<Admin />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
