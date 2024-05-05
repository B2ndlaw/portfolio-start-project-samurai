import React from 'react';
import './App.css';

import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { Testimony } from './layout/sections/testimony/Testimony';
import { Contact } from './layout/sections/contact/Contact';
import { Slogan } from './layout/sections/slogan/Slogan';
import { Footer } from './layout/footer/Footer';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Slogan />
            <Skills />
            <Works />
            <Testimony />
            <Contact />
            <Footer/>
            
        </div>
    );
}

export default App;
