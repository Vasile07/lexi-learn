import React, {createContext, useContext} from "react";

const LevelsContext = createContext([]);

export const LevelsProvider = ({children}) => {
    const levels = [{number: 1, path: "/levels/invata-silabe"}];

    return (
        <LevelsContext.Provider value={levels}>
            {children}
        </LevelsContext.Provider>
    );
};

export const useLevels = () => {
    const context = useContext(LevelsContext);
    if (!context) {
        throw new Error("useLevels must be used within a LevelsProvider");
    }
    return context;
};
