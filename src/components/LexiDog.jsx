import dog from "../assets/images/dog.png";
import {useEffect, useState} from "react";

export default function LexiDog({text}) {
    console.log("Lexi");
    const [enunt, setEnunt] = useState('');

    const speakText = (text) => {
        window.speechSynthesis.cancel();

        const speech = new SpeechSynthesisUtterance(text);

        speech.lang = 'ro-Ro';
        speech.pitch = 0.5;
        speech.rate = 0.8;
        window.speechSynthesis.speak(speech);
    };

    useEffect(() => {
        setEnunt(text);
    }, []);

    useEffect(() => {
        console.log(enunt)
    }, [enunt])

    useEffect(() => {
        speakText(text);

    }, [text]);

    return (
        <div style={styles.container} onClick={() => speakText(enunt)}>
            <img src={dog} width={170} height={170} alt="Lexi"/>
        </div>
    );
}

const styles = {
    container: {
        cursor: 'pointer',
        position: "absolute",
        bottom: 0,
        left: 0,
    }
};
