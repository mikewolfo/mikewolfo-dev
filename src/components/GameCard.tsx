import { useEffect, useState } from "react";
import './GameCard.css';

async function getServerStatus(URL: string) {

    // get the api response
    // if no response, exit function. it will just say "fetching...." forever
    // if response, then:
    //      if true, show: Server is ONLINE
    // Show MOTD
    // Show Current Minecraft Version of the server
    //      else, show: Server is OFFLINE

    // const URL = 'https://api.mcstatus.io/v2/status/java/mikeos.net:25565';

    try {
        const response = await fetch(URL);

        if (!response.ok) throw new Error(`Response Status: ${response.status}`);

        const result = await response.json();
        //console.log(result);

        return result;
    } catch (error) {
        if (error instanceof Error)
            console.error(error.message);
        return null;
    }
}

export default function GameCard({ name, URL } : {name:string, URL:string}) {

    const [serverStatus, setServerStatus] = useState('Retrieving...');
    const [motd, setMotd] = useState('N/A');
    const [mcVersion, setMcVersion] = useState('N/A');
    const [statusColor, setStatusColor] = useState('white');
    const [serverIcon, setServerIcon] = useState('data:image/png;base64,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');

    useEffect(() => {
        getServerStatus(URL).then((response) => {
            if (response !== null) {
                console.log(response);
                if (response.online) {
                    setServerStatus('ONLINE');
                    setStatusColor('online');
                    setMotd(response.motd.clean);
                    setMcVersion(response.version.name_clean);
                    setServerIcon(response.icon);
                }
                else {
                    setServerStatus('OFFLINE');
                    setStatusColor('offline');
                }

            }else {
                    setServerStatus('OFFLINE');
                    setStatusColor('offline');
            }
        });



    }, []);


    return (

        <>
            <div className='gameCard'>

                <div className='serverImage'>
                    <img src={serverIcon} alt='Server Icon'></img>
                </div>

                <div className='gameDetails'>
                    <h1>{name}</h1>
                    <p>The server is: <strong className={statusColor}>{serverStatus}</strong></p>

                    <p>MOTD: {motd}</p>
                    <p>Game Version: {mcVersion}</p>

                </div>

            </div>

        </>

    );

}