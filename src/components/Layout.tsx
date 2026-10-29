import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Layout.css'
import HbMenu from './HbMenu';

export default function Layout(){

    const location = useLocation();
    // const [footerKey, setFooterKey] = useState(0);

    // useEffect( () => {
    //     console.log('Location changed');
    //     setFooterKey(k => k + 1);
    // }, [location]);

    return (

        <>
        
            <Navbar></Navbar>
            {/* <HbMenu></HbMenu> */}

            <main>
                <Outlet></Outlet>
            </main>



            <Footer key={location.pathname}></Footer>

        
        </>

    );

}