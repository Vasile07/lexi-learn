import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StartPage from './windows/StartPage';
import LevelsPage from './windows/LevelsPage';
import PaginaJoc from "./windows/PaginaJoc";
import PrindeLexiJoc from "./components/PrindeLexiJoc";
import {LevelsProvider} from "./LevelsProvider";
import RecunoasteVocaleleJoc from "./components/RecunoasteVocaleleJoc"; // Import LevelsPage

function App() {
    return (

        <LevelsProvider>
            <Router basename="/lexi-learn">
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
                    <Route path="/levels/recunoaste-vocalele"
                           element={
                               <PaginaJoc
                                   component={RecunoasteVocaleleJoc}
                                   title={"GASESTE VOCALELE!"}
                               />
                           }
                    />

                </Routes>
            </Router>
        </LevelsProvider>
    );
}

export default App;
