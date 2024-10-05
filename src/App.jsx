
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BasketPage from './pages/BasketPage';

function App() {
    return (
        <Router>
            <nav className="p-4 bg-gray-200">
                <Link to="/" className="mr-4">Home</Link>
                <Link to="/BasketPage">Your Basket</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/BasketPage" element={<BasketPage />} />
            </Routes>
        </Router>
    );
}

export default App
