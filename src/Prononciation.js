export default function Prononciation(props) {
    const { word, audio } = props
    console.log(audio)


    return (
        <section>
            <h3>{word}</h3>
            {audio.map(function (audio, index, index2) {
                return (
                    <div>
                        {audio.audio && <p key={index}>{audio.text}</p>}
                        {audio.audio && <audio key={index2} src={audio.audio} controls />}
                    </div>)
            })}

        </section>
    )
}