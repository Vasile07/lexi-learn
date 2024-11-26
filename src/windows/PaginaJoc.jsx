import LexiDog from "../components/LexiDog";
import button from "../assets/images/buttons/SmallButton.png"
import homeIcon from "../assets/images/icons/HomeIcon.png"
import nextIcon from "../assets/images/icons/PlayIcon.png"
import React, {useState} from "react";

export default function PaginaJoc({component, title, enunt, params}) {
    const [text, setText] = useState(enunt);
    const handleSetText = (newText) => {
        if (text === newText) {
            setText("");
            setTimeout(() => setText(newText), 0);
        } else {
            setText(newText);
        }
    };
    return (
        <div style={styles.pageContainer}>
            <div style={styles.header}>
                <div style={styles.homeButton}>
                    <img
                        src={button}
                        style={{width: "100%", height: "100%", objectFit: "contain", position: "absolute"}}
                        alt={"button"}
                    />
                    <img
                        src={homeIcon}
                        style={{
                            width: "60%", height: "60%", objectFit: "contain", position: "absolute", top: "50%",
                            transform: "translateY(-65%)",
                        }}
                        alt={"home"}
                    />
                </div>
                <div style={styles.titleBanner}>
                    {title}
                </div>
                <div style={styles.nextButton}>
                    <img
                        src={button}
                        style={{width: "100%", height: "100%", objectFit: "contain", position: "absolute"}}
                        alt={"button"}
                    />
                    <img
                        src={nextIcon}
                        style={{
                            width: "60%", height: "60%", objectFit: "contain", position: "absolute", top: "50%",
                            transform: "translateY(-65%)",
                        }}
                        alt={"home"}
                    />
                </div>
            </div>
            <div style={styles.gameScreen}>
                {component && React.createElement(component, {...params, setText: handleSetText})}
            </div>
            <div>
                <LexiDog text={text}/>
            </div>
        </div>
    )
}

const styles = {
    pageContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#F5E3A9",
    },
    header: {
        width: "100%",
        height: "15%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    homeButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
        height: "90%",
        position: "relative",
    },
    titleBanner: {
        width: "60%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#94DD2F",
        color: "#fff",
        textShadow: "0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black",
        fontSize: 120,
        fontFamily: "Jomhuria, sans-serif",
    },
    nextButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
        height: "90%",
        position: "relative",
    },
    gameScreen: {
        width: "100%",
        height: "85%",
        display: "flex",
    }
}