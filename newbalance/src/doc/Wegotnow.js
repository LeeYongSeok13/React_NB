const Wegotnow = () => {
    return (
        <section className="Wegotnow">
            <div className="Endadd">
                <figure>
                    <img src={process.env.PUBLIC_URL + "/img/WeGotNow.jpg"}></img>
                </figure>
                <span><a href="/">더 알아보기</a></span>
            </div>
        </section>
    )
}

export default Wegotnow;