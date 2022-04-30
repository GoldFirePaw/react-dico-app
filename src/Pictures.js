export default function Pictures(props) {
    let imagesUrl = props.imgUrl
    console.log(imagesUrl)
    return (
        <section>
            <div className="container">
                <div className="row">
                    {
                        imagesUrl && imagesUrl.map(function (imagesUrl, index) {
                            return (
                                <div className="col-4" key={index}>
                                    <a href={imagesUrl.src.landscape} target="blank">
                                        <img src={imagesUrl.src.landscape} alt={imagesUrl.alt} />
                                    </a>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

/**/