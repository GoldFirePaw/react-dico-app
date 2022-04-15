export default function Prononciation(props) {
    const { word, audio } = props

    return (
        <section>
            <h3>{word}</h3>
            {audio.map(function (audio, index) {
                return (
                    <div key={index}>
                        {audio.audio && <p>{audio.text}</p>}
                        {audio.audio && <audio src={audio.audio} controls />}
                    </div>)
            })}

        </section>
    )
}