import {Link, Routes, Route} from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Catalog from '../../pages/Catalog/Catalog'
import Cart from '../../pages/Cart/Cart'
import './Navbar.css'

export default function Navbar(){
    return(
        <div className="navbar-container">
            <nav className="navbar-nav">
                <div className="navbar-logo">
                    Store<span>.</span>
                </div>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/catalog" className="navbar-link">Catalog</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/cart" className="navbar-link">Cart</Link>
                    </li>
                </ul>
            </nav>

            <div className="navbar-content">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/catalog' element={<Catalog/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    )
}