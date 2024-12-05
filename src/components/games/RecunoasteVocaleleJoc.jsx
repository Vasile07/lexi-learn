import React, {useEffect, useState} from "react";
import Cuvant from "../Cuvant";
import cal from "../../assets/images/games/RecunoasteVocale/cal.png";
import foc from "../../assets/images/games/RecunoasteVocale/foc.png";
import cer from "../../assets/images/games/RecunoasteVocale/cer.png";
import pix from "../../assets/images/games/RecunoasteVocale/pix.png";
import fulg from "../../assets/images/games/RecunoasteVocale/fulg.png";
import nas from "../../assets/images/games/RecunoasteVocale/nas.png";

export default function RecunoasteVocaleleJoc({setText, completeLevel}) {
    const cuvinte = [
        {cuvant: "cal", imagine: cal},
        {cuvant: "foc", imagine: foc},
        {cuvant: "cer", imagine: cer},
        {cuvant: "pix", imagine: pix},
        {cuvant: "fulg", imagine: fulg},
        {cuvant: "nas", imagine: nas},
    ];
    const [vocaleGasite, setVocaleGasite] = useState(cuvinte.map(cuv => false))

    useEffect(() => {
        console.log(vocaleGasite)
        if (vocaleGasite.filter(gasit => !gasit).length === 0)
            completeLevel()
    }, [vocaleGasite, completeLevel]);

    const vocalaGasita = (indexCuvant) => {
        console.log(`INDEX CUVANT: ${indexCuvant}`)
        setVocaleGasite(vocaleGasite.map((gasit, index) => index === indexCuvant ? true : gasit))
    }

    const chunkArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    const cuvinteInRows = chunkArray(cuvinte, 2);

    return (
        <div style={styles.pageContainer}>
            <div style={styles.contentWrapper}>
                {cuvinteInRows.map((row, rowIndex) => (
                    <div key={rowIndex} style={styles.row}>
                        {row.map((item, index) => (
                            <div key={index} style={styles.cell}>
                                <div style={styles.cuvantContainer}>
                                    <Cuvant cuvant={item.cuvant} setText={setText}
                                            vocalaGasita={() => vocalaGasita(index + (rowIndex) * 2)}/>
                                </div>
                                <img
                                    src={item.imagine}
                                    alt={item.cuvant}
                                    style={styles.image}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    pageContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
    },
    contentWrapper: {
        width: "80%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "35%",
        marginBottom: 20,
        width: "100%",
    },
    cell: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
        flex: 1,
    },
    cuvantContainer: {
        marginBottom: 10,
    },
    image: {
        height: "50%",
        width: "auto",
        objectFit: "contain",
        maxHeight: "200px",
    },
};
