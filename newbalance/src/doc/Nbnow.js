const Nbnow = () => {
    return (
        <section className="Nbnow csc">
            <div className="container">
                <h2>NB Now</h2>
                <div className="Nbnow_item">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/img/NBsummer.jpg"}></img>
                        <div className="box">
                            <h2>Casual</h2>
                            <p>캐주얼</p>
                            <strong><a href="/">더보기<i className="xi-arrow-right"></i></a></strong>
                        </div>
                    </figure>
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/img/NBcasual.jpg"}></img>
                        <div className="box">
                            <h2>Summer</h2>
                            <p>여름</p>
                            <strong><a href="/">더보기<i className="xi-arrow-right"></i></a></strong>
                        </div>
                    </figure>
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/img/NBkids.jpg"}></img>
                        <div className="box">
                            <h2>Kids</h2>
                            <p>어린이</p>
                            <strong><a href="/">더보기<i className="xi-arrow-right"></i></a></strong>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    )
}
export default Nbnow;