import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StartPage from './windows/StartPage';
import LevelsPage from './windows/LevelsPage';
import PaginaJoc from "./windows/PaginaJoc";
import PrindeLexiJoc from "./components/games/PrindeLexiJoc";
import {LevelsProvider} from "./LevelsProvider";
import RecunoasteVocaleleJoc from "./components/games/RecunoasteVocaleleJoc";
import SuneteSiPronuntieJoc from "./components/games/SuneteSiPronuntieJoc"; // Import LevelsPage

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
                                   enunt={"Invata silabele cu mine!"}
                               />
                           }
                    />
                    <Route path="/levels/recunoaste-vocalele"
                           element={
                               <PaginaJoc
                                   component={RecunoasteVocaleleJoc}
                                   title={"GASESTE VOCALELE!"}
                                   enunt={"Recunoaste vocalele cu mine!"}
                               />
                           }
                    />
                    <Route path="/levels/sunete-si-pronuntie"
                           element={
                               <PaginaJoc
                                   component={SuneteSiPronuntieJoc}
                                   title={"ÎNVĂȚĂM VOCALELE!"}
                                   enunt={"Sa invatam pronuntia vocalelor!"}
                               />
                           }
                    />

                </Routes>
            </Router>
        </LevelsProvider>
    );
}

export default App;
