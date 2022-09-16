import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SHIRT = [
    { id: 1, content: "MEN NB Athletics Intellegent 반팔티(WHITE)", price: "39,900원" },
    { id: 2, content: "MEN NB Athletics Intellegent 반팔티(YELLOW)", price: "39,900원" },
    { id: 3, content: "MEN NB Athletics Intellegent 반팔티(DARK BLUE)", price: "39,900원" },
    { id: 4, content: "MEN NB Athletics Intellegent 반팔티", price: "39,900원" },
    { id: 5, content: "UNI Basic 래쉬가드(BLACK)", price: "79,000원" },
    { id: 6, content: "UNI Basic 래쉬가드(LIGHT BLUE)", price: "79,000원" },
    { id: 7, content: "UNI Basic 래쉬가드(DARK BLUE)", price: "79,000원" },
    { id: 8, content: "WOMEN Basic 집업 래쉬가드", price: "99,000원" }
]

const Shirt = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, [])
    const shirtSlide = useRef(null);
    const setting = {
        arrows: false,
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '400px'
    }

    return (
        <section className="Shirt csc">
            <div className="container">
                <h2>SUMMER SHIRT COLLECTION</h2>
                <Slider {...setting} ref={shirtSlide}>
                    {
                        SHIRT.map((shirt, idx) => {
                            return (
                                <figure key={shirt.id} className={'shirt0' + shirt.id}>
                                </figure>
                            )
                        })
                    }
                </Slider>
                <div className="box">
                    <div className='tit'>{SHIRT[IDX].content}</div>
                    <p>{SHIRT[IDX].price}</p>
                </div>
                <ul className='shirtTab'>
                    {
                        SHIRT.map((dots, idx) => {
                            return (
                                <li key={dots.id} className={idx === IDX ? 'on' : ''} onClick={() => shirtSlide.current.slickGoTo(idx)}>{dots.id}</li>
                            )
                        })
                    }
                </ul>
                <div className='shirtArrows'>
                    <button onClick={() => shirtSlide.current.slickPrev()}><i className='xi-arrow-left'></i></button>
                    <button onClick={() => shirtSlide.current.slickNext()}><i className='xi-arrow-right'></i></button>
                </div>
            </div>

        </section >
    )
}
export default Shirt;