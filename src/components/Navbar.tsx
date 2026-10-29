import './Navbar.css'
import { Link } from 'react-router';
import { RxHamburgerMenu } from "react-icons/rx";
import HbMenu from './HbMenu';
import { useState } from 'react';


export default function NavBar() {

    let [showHbMenu, setShowHbMenu] = useState(false);

    return (

        <header>

            <nav>

                <RxHamburgerMenu onClick={() => { setShowHbMenu(prev => !prev)}} className='hbButton' size={32} />

                <div className='desktop'>
                    <ul>
                        <li><Link className='link' to='/'>Home</Link></li>
                        <li><Link className='link' to='/games'>Games</Link></li>
                        <li><Link className='link' to='/projects'>Projects</Link></li>
                        <li><Link className='link' to='/about'>About</Link></li>
                    </ul>
                </div>


                {showHbMenu ? <HbMenu></HbMenu> : <></>}
            </nav>


        </header>


    );

}
