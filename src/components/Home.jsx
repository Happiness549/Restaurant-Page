function Home() {

    const homeStyle = {
        backgroundImage: 'url("/images/home-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        color: 'white',
        display: 'flex',
        textItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    };

    return (
    <div style={homeStyle}>
        <h1> Welcome to our Restaurant</h1>
    </div>
    );
}

export default Home;