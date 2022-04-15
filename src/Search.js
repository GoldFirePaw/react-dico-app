export default function Search(props) {
    let { setWord, word } = props

    function handleSubmit(event) {
        event.preventDefault();
        setWord((event.target.search.value).charAt(0).toUpperCase() + (event.target.search.value).slice(1));
    }

    return (
        <section>
            <h2>What word do you want to look up ?</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your word" name="search" />
                <button type="submit">Search</button>
            </form>
            <p>i.e. paris, wine, yoga, coding</p>
            <p>{word}</p>
        </section>
    )
}