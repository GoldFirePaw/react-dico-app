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
    const [imgUrl, setImgUrl] = useState();

    useEffect(() => {
        if (word) {
            let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            axios.get(apiUrl).then(function (response) {
                setData(response);
                setError(null)
                //console.log(response)
            }).catch(function (error) {
                setError(error.response.data)
                setData(null)
            })
            let pexelsApiKey = "563492ad6f91700001000001d4f56d8d4b7440ad9cd433bedd5cb2fb"
            let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`
            let headers = { Authorization: `Bearer ${pexelsApiKey}}` };
            axios.get(pexelsApiUrl, { headers: headers }).then(function (response) {
                //console.log(response.data.photos);
                setImgUrl(response.data.photos);

            })
        }

    }, [word])

    function trueOrFalse() {
        if (data) {
            return (<>
                <Prononciation word={word} audio={data.data[0].phonetics} />
                <Meanings meanings={data.data[0].meanings} />
                <Pictures imgUrl={imgUrl} />
            </>)
        }

        if (error) {
            return (<Error title={error.title} message={error.message} resolution={error.resolution} />
            )
        }
    }

    return (<div className='app-container'>
        <Search setWord={setWord} word={word} />
        <div>{trueOrFalse()}</div>
    </div>)
}