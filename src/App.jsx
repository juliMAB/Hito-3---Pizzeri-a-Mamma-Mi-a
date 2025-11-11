import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
// import LoginPage from "./components/Login";
// import RegisterPage from "./components/Register";
const App = () => {
	return (
			<AuthProvider>
				<CartProvider>
					<div>
						<Navbar />
						{ <Home /> }
						<Cart />
						{/* <RegisterPage /> */}
						{/* <LoginPage /> */}
						<Footer />
					</div>
				</CartProvider>
			</AuthProvider>
	);
};
export default App;