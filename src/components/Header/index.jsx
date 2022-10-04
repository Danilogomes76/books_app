import React from 'react';
import { Link } from 'react-router-dom'
import { HeaderComponent, Separator } from './style'
import logo from '../../assets/book.png'
import MobileDrawer from './MobileDrawer';


function Header() {
    return (
        <HeaderComponent size={{ '@bp1': 'bp1' }}>
            <Separator>
                <div>
                    <img alt='logo' src={logo} />
                    <h1>BOOKS LIBRY</h1>
                </div>

                <ul>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/books'}><li>Books</li></Link>
                    <Link to={'/search'}><li>FindBook</li></Link>
                </ul>
            </Separator>
            <MobileDrawer />
        </HeaderComponent>
    )
}

export default Header;