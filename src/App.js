import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StartPage from './windows/StartPage';
import LevelsPage from './windows/LevelsPage';
import PaginaJoc from "./windows/PaginaJoc";
import PrindeLexiJoc from "./components/games/PrindeLexiJoc";
import {LevelsProvider} from "./LevelsProvider";
import RecunoasteVocaleleJoc from "./components/games/RecunoasteVocaleleJoc";
import SuneteSiPronuntieJoc from "./components/games/SuneteSiPronuntieJoc";
import LevelComplete from "./windows/LevelComplete";
import {useEffect} from "react";
import AsociereCuvinteJoc from "./components/games/AsociereCuvinteJoc";
import ConstruiesteCuvinteJoc from "./components/games/ConstruiesteCuvinteJoc"; // Import LevelsPage

function App() {

    useEffect(() => {
        if (!localStorage.getItem("currentLevel"))
            localStorage.setItem("currentLevel", "1");
    }, []);

    return (

        <LevelsProvider>
            <Router basename="/lexi-learn">
                <Routes>
                    <Route path="/" element={<StartPage/>}/>
                    <Route path="/levels" element={<LevelsPage/>}/>
                    <Route path="/level-complete" element={<LevelComplete/>}/>
                    <Route path="/levels/sunete-si-pronuntie"
                           element={
                               <PaginaJoc
                                   levelNumber={1}
                                   component={SuneteSiPronuntieJoc}
                                   title={"ÎNVĂȚĂM VOCALELE!"}
                                   levelLink={"/sunete-si-pronuntie"}
                                   enunt={"Vom învăța cum se pronunță vocalele. Acestea sunt cele scrise cu culoarea verde. Apasă pe butonul de sub fiecare vocală pentru a auzii pronunția."}
                               />
                           }
                    />
                    <Route path="/levels/recunoaste-vocalele"
                           element={
                               <PaginaJoc
                                   levelNumber={2}
                                   component={RecunoasteVocaleleJoc}
                                   title={"GASESTE VOCALELE!"}
                                   levelLink={"/recunoaste-vocalele"}
                                   enunt={"Recunoaște vocalele din cuvintele de pe ecran! Dă click pe vocala din fiecare cuvânt."}
                               />
                           }
                    />
                    <Route path="/levels/potriveste-cuvinte"
                           element={
                               <PaginaJoc
                                   levelNumber={3}
                                   component={AsociereCuvinteJoc}
                                   title={"POTRIVEȘTE CUVINTELE!"}
                                   levelLink={"/potriveste-cuvinte"}
                                   enunt={"Potrivește cuvintele cu imaginile corespunzătoare!"}
                               />
                           }
                    />
                    <Route path="/levels/invata-silabe"
                           element={
                               <PaginaJoc
                                   levelNumber={4}
                                   component={PrindeLexiJoc}
                                   title={"PRINDE-L PE LEXI!"}
                                   levelLink={"/invata-silabe"}
                                   params={{
                                       grupuri: ["MA", "ME", "MI", "MO", "MU"]
                                   }}
                                   enunt={"Lexi are câteva surprize pentru tine! Prinde-l pe Lexi pentru a descoperii surpriza! Apasă pe acesta de fiecare dată când iese din mușuroi."}
                               />
                           }
                    />
                    <Route path="/levels/construieste-cuvintele"
                           element={
                               <PaginaJoc
                                   levelNumber={5}
                                   component={ConstruiesteCuvinteJoc}
                                   title={"CONSTRUIEȘTE CUVINTELE!"}
                                   levelLink={"/construieste-cuvintele"}
                                   enunt={"Ajută-l pe Lexi să găsească cealaltă jumătate a cuvântului aflat pe pod! Alege varianta corectă!"}
                               />
                           }
                    />
                </Routes>
            </Router>
        </LevelsProvider>
    );
}

export default App;
