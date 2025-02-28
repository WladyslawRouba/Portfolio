import './App.css'
import {Header} from './layout/header/Header';
import {Main} from "./layout/sections/main/main.js";
import { Skills } from './layout/sections/skills/skills.js';
import { Works } from './layout/sections/works/Works.js';
function App() {
    return (
        <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Works/>
        </div>
    );
}

export default App


