import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'holderjs'; 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NavbarCustom from "./components/NavbarCustom";
import { UserProvider } from './contexts/UserContext';


function App() {
  return (
		<div>
			<BrowserRouter>
				<UserProvider>
					<div >
						<NavbarCustom />
						<div>
							<Routes>
								<Route path="/" element={<Home />}></Route>
							</Routes>
						</div>
					</div>
				</UserProvider>
			</BrowserRouter>
		</div>
  );
}

export default App;
