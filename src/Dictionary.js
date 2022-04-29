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
                setData(response);
                console.log(response)
            }).catch(function (error) {
                setError(error.response.data)
            })
        }

    }, [word])

    function trueOrFalse() {
        if (data) {

            return (<>
                <Prononciation error={false} data={true} word={word} audio={data.data[0].phonetics} />
                <Meanings error={false} data={true} meanings={data.data[0].meanings} />
                <Pictures error={false} data={true} />
            </>)
        }

        if (error) {
            return (<Error error={true} data={false} title={error.title} message={error.message} resolution={error.resolution} />
            )
        }
    }

    return (<div className='app-container'>
        <Search setWord={setWord} word={word} />
        <div>{trueOrFalse()}</div>
    </div>)
}