import { Link } from 'react-router';
import './HbMenu.css';

export default function HbMenu() {

    return (

        <div className='hbMenu'>

            <ul>
                <li><Link className='link' to='/'>Home</Link></li>
                <li><Link className='link' to='/games'>Games</Link></li>
                <li><Link className='link' to='/projects'>Projects</Link></li>
                <li><Link className='link' to='/about'>About</Link></li>
            </ul>

        </div>

    );

}

