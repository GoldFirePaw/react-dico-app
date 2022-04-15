import { useEffect, useState } from "react";
import axios from "axios";
import Search from './Search';
import Prononciation from './Prononciation';
import Meanings from './Meanings';
import Pictures from './Pictures';
import Error from "./Error";

export default function Dictionary() {
    const [word, setWord] = useState();
    const [data, setData] = useState()
    const [error, setError] = useState();

    useEffect(() => {
        if (word) {
            let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            axios.get(apiUrl).then(function (response) {
                setData(response.data[0]);
                console.log(response)
            })
        }

    }, [word])



    return (<div className='app-container'>
        <Search setWord={setWord} word={word} />
        {data &&
            <>
                <Prononciation word={word} audio={data.phonetics} />
                <Meanings meanings={data.meanings} />
                <Pictures />
            </>
        }
    </div>)
}