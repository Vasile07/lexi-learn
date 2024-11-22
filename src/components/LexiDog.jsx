import dog from "../assets/images/dog.png";
import { useCallback, useEffect } from "react";

export default function LexiDog(properties) {
    console.log("Lexi");

    const speakText = useCallback(() => {
        const speech = new SpeechSynthesisUtterance(properties.text);
    
        speech.lang = 'ro'; 
        speech.pitch = 1;      
        speech.rate = 1;        
        window.speechSynthesis.speak(speech);
    }, [properties.text]);

    useEffect(() => {
        speakText(); // Speak the text only on component mount
    }, [speakText]); // Dependencies include 'speakText'

    return (
        <div style={styles.container} onClick={speakText}>
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
