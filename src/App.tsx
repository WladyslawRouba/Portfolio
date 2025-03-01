import './App.css'
import {Header} from './layout/header/Header';
import {Main} from "./layout/sections/main/main.js";
import { Skills } from './layout/sections/skills/skills.js';
import { Works } from './layout/sections/works/Works.js';
import { Testimony} from './layout/sections/testimony/testimony.js';
import { Contacts } from './layout/sections/contacts/contacts.js'
import { Slogan } from './layout/sections/slogan/slogan.js';
import { Footer } from './layout/footer/footer.js';
function App() {
    return (
        <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Works/>
        <Testimony/>
        <Contacts/>
        <Slogan/>
        <Footer/>
        </div>
    );
}

export default App


