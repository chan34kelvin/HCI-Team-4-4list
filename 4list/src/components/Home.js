import React, {useState} from 'react';
import Navbar from './Navbar';
import Navigation from './navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Navbar/>
        </div>
    );
}

export default Home;