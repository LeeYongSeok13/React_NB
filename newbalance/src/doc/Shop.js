const Shop = () => {
    return (
        <section className="Shop csc">
            <div className="container">
                <h2>Shop All</h2>
                <div className="Shop_item">
                    <figure>
                        <a href="/"><img src={process.env.PUBLIC_URL + "/img/NBheritage.jpg"}></img></a>
                        <p>Heritage Edition</p>
                    </figure>
                    <figure>
                        <a href="/"><img src={process.env.PUBLIC_URL + "/img/NBMen.jpg"}></img></a>
                        <p>Men</p>
                    </figure>
                    <figure>
                        <a href="/"><img src={process.env.PUBLIC_URL + "/img/NBWomen.jpg"}></img></a>
                        <p>Women</p>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Shop