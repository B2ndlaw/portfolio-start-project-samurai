import React from 'react';
import './App.css';

import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Works } from './layout/sections/works/Works';
import { Sensei } from './layout/sections/sensei/Sensei';
import { Contact } from './layout/sections/contact/Contact';

import { Footer } from './layout/footer/Footer';
import { SkillsMenu } from './layout/sections/skills/SkillsMenu';



function App() {
    return (
        <div className="App">
            
            <Header />
            <Main />
           <SkillsMenu/>
            <Works />
            <Sensei />
            <Contact />
            <Footer/>
            
        </div>
    );
}

export default App;

