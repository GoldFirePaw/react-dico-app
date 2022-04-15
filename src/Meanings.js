export default function Meanings(props) {
    const { meanings } = props
    return (
        <div>
            {meanings.map(function (meaning, index) {
                return (
                    <section key={index}>
                        <h4>{meaning.partOfSpeech}</h4>
                        {meaning.definitions.map(function (definitionItem, index) {
                            return (
                                <div key={index} className="definitions">
                                    {definitionItem.synonyms && <i><small>{(definitionItem.synonyms.join(', '))}</small></i>}
                                    <p>{definitionItem.definition}</p>
                                    {definitionItem.example && <p><i><small>ex : {definitionItem.example}</small> </i></p>}
                                    <h5>Similar :</h5>
                                </div>
                            )
                        })}
                    </section>
                )
            })
            }
        </div>
    )
}