import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StartPage from './windows/StartPage';
import LevelsPage from './windows/LevelsPage';
import PaginaJoc from "./windows/PaginaJoc";
import PrindeLexiJoc from "./components/PrindeLexiJoc"; // Import LevelsPage

function App() {
    return (
        <Router>
            <Routes>
                {/* Define routes for your pages */}
                <Route path="/" element={<StartPage/>}/>
                <Route path="/levels" element={<LevelsPage/>}/>
                <Route path="/levels/invata-silabe"
                       element={
                           <PaginaJoc
                               component={PrindeLexiJoc}
                               title={"PRINDE-L PE LEXI!"}
                               params={{
                                   grupuri: ["CE", "CI"]
                               }}
                           />
                       }
                />
            </Routes>
        </Router>
    );
}

export default App;
