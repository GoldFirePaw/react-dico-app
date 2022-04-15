export default function Error(props){
    let {title, message, resolution} = props 
return(
    <section>
        <h2>{title}</h2>
        <p>{message}</p>
        <p>{resolution}</p>
    </section>
)
}