import buttonBackground from "../assets/images/buttons/ButtonBackground.png"
import button from "../assets/images/buttons/SmallButton.png"
import {useNavigate} from "react-router-dom";

export default function Level({level, path}) {
    const navigate = useNavigate();
    const goToLevel = () => {
        navigate(path);
    }

    return (
        <div style={styles.levelContainer} onClick={goToLevel}>
            <img src={buttonBackground} style={styles.buttonBackground} alt="buttonBackground"></img>
            <img src={button} style={styles.button} alt="button"></img>
            <p style={styles.text}>{level}</p>
        </div>
    )
}

const styles = {
    levelContainer: {
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    },
    buttonBackground: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
    },
    button: {
        position: "absolute",
        top: "8%",
        width: "auto",
        height: "46%",
    },
    text: {
        color: "#fff",
        textShadow: "0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black",
        margin: 0,
        position: "absolute",
        top: "10%",
        fontSize: 50,
        fontFamily: "Jomhuria, sans-serif",
    }
}