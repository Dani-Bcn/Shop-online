import React from 'react';
import Navbar from './Navbar';
import Search from './Search';


const Home = () => {
    return (
        <>
            <header className='container-header'>
                <h1>My shop online</h1>
                <Navbar></Navbar>
            </header>

            
            <main className='container-home'>

                <Search></Search>
            </main>
        </>
    );
}

export default Home;
