
import GameCard from "./components/GameCard";
import './Games.css'




export default function Games() {

    


    return (
        <section className='gamesPage'>
            <h1>Games</h1>
            <GameCard name={'MikeOS.NET'} URL={'https://api.mcstatus.io/v2/status/java/mikeos.net:25565'}></GameCard>

        </section>
    );



}
