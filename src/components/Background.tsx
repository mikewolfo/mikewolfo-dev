
export default function Background() {

    const stars = [];

    for (let i = 0; i < 5; i++) {
        // stars.push(<span style={
        //     {
        //         left: `${getRandomInt(0, window.screen.width - 300)}px`,
        //         top: `${getRandomInt(0, window.screen.height)}px`
        //     }} key={i}></span>)

        // stars.push(<span style={
        //     {
        //         left: `${getRandomInt(0, 200)}vw`,
        //         top: `${getRandomInt(0, 200)}vh`
        //     }} key={i}></span>)

        let x = getRandomInt(window.screen.height, window.screen.width + window.screen.height)
        let y = getRandomInt(-window.screen.height, 0)

        //buffer set 
        stars.push(<span style={
            {
                'left': `${x}px`,
                'top': `${y}px`
            }} key={i + 100}></span>);

        // main set
        stars.push(<span style={
            {
                'left': `${x - window.screen.height}px`,
                'top': `${y + window.screen.height}px`
            }} key={i + 200}></span>);

            // front set
        stars.push(<span style={
            {
                'left': `${x - window.screen.height * 2}px`,
                'top': `${y + window.screen.height * 2}px`
            }} key={i + 300}></span>);


        // main set + right
        stars.push(<span style={
            {
                'left': `${x + window.screen.width - window.screen.height}px`,
                'top': `${y + window.screen.height}px`
            }} key={i + 400}></span>);

            // front set + right
        stars.push(<span style={
            {
                'left': `${x + window.screen.width - window.screen.height * 2}px`,
                'top': `${y + window.screen.height * 2}px`
            }} key={i + 500}></span>);


        // main set + left
        stars.push(<span style={
            {
                'left': `${x - window.screen.width - window.screen.height}px`,
                'top': `${y + window.screen.height}px`
            }} key={i + 600}></span>);

            // buffer set + left
        stars.push(<span style={
            {
                'left': `${x - window.screen.width}px`,
                'top': `${y}px`
            }} key={i + 700}></span>);


        // stars.push(<span key={i}></span>)

        // stars.push(<span style={
        //     {
        //         left: `100px`,
        //         top: `1000px`
        //     }} key={i}></span>)
    }

    return (
        <>

            {stars}

        </>
    );

}

function getRandomInt(min: any, max: any) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getID(){
    const minCeiled = 0;
    const maxFloored = 2e31-1;
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

}