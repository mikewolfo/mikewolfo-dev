import MikeImage from './assets/mike.gif'
import './About.css'

export default function About() {

    return (

        <section className='aboutPage'>

            <h1>About</h1>

            <div className='bio'>

                <img src={MikeImage} alt='Art of MikeTheWolfBoyo'></img>


                <div className='textContent'>
                    <p>Welcome! I'm Mike The Wolf Boyo, and I run this website.</p>

                    <p>As for me, I really enjoy programming as well and anything to do with computers really. Enjoy your stay here! <em>i also really like werewolves.</em></p>
                </div>

            </div>

        </section>


    );

}