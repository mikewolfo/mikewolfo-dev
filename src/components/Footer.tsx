import { FaBluesky } from "react-icons/fa6";
import { FaYoutube, FaGithub } from "react-icons/fa";
import './Footer.css'

export default function Footer() {

    const blueskyLink = import.meta.env.VITE_BLUESKY_LINK;
    const youtubeLink = import.meta.env.VITE_YOUTUBE_LINK;
    const githubLink  = import.meta.env.VITE_GITHUB_LINK;

    

    return (
        <footer>

            <div className='socials'>

                <a href={blueskyLink} target='_blank' rel='noreffer noopener'>
                    <span className='socialIcon'>
                        <FaBluesky size={30} />
                    </span>
                </a>

                <a href={githubLink} target='_blank' rel='noreffer noopener'>
                    <span className='socialIcon'>
                        <FaGithub size={30} />
                    </span>
                </a>

                <a href={youtubeLink} target='_blank' rel='noreffer noopener'>
                    <span className='socialIcon'>
                        <FaYoutube size={30} />
                    </span>
                </a>
            </div>

            <p>MikeWolfo.Dev ~ {getYear()}</p>

        </footer>


    );


}


function getYear() {

    return new Date().getFullYear();

}