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
                                    <small>{definitionItem.synonyms}</small>
                                    <p>{definitionItem.definition}</p>
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