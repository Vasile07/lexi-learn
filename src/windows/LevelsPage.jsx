import React from "react"
import LexiDog from "../components/LexiDog"
import Levels from "../components/Levels"
import CloudyBackgorund from "../components/CloudyBackground"

export default function LevelsPage(properties){

    return (
        <div style={styles.pageContainer}>    
            <CloudyBackgorund />
            <LexiDog text={"Alege un nivel pe care doreşti să îl parcurgi."}/>
            <div style={styles.levelsContainer}>
                <Levels/>
            </div>
        </div>
    )
}

const styles = {
    pageContainer: {
        background: "#66C1DA",
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    levelsContainer: {
        width: "40%",
        height: "75%",
        position: "absolute",
    }
}