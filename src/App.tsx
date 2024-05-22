import React from 'react';
import './App.css';

import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Works } from './layout/sections/works/Works';
import { Sensei } from './layout/sections/sensei/Sensei';
import { Contact } from './layout/sections/contact/Contact';

import { Footer } from './layout/footer/Footer';
import { Skills } from './layout/sections/skills/Skills';
import { GoTopBtn } from './components/goTopBtn/GoTopBtn';



function App() {
    return (
        <div className="App">
            <GoTopBtn/>
            <Header />
            <Main />
           <Skills/>
            <Works />
            <Sensei />
            <Contact />
            <Footer/>
            
        </div>
    );
}

export default App;

