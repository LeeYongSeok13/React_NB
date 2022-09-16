import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, link: "/", title: "MainVisual01" },
    { id: 2, link: "/", title: "MainVisual02" },
    { id: 3, link: "/", title: "MainVisual03" }
]

const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, [])
    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
    }

    return (
        <section className='MainVisual'>
            <Slider {...setting} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}></figure>
                        )
                    })
                }
            </Slider>
            <ul className='slideTab'>
                {
                    SLIDE.map((dots, idx) => {
                        return (
                            <li key={dots.id} className={idx === IDX ? 'on' : ''} onClick={() => mainSlide.current.slickGoTo(idx)}>{dots.title}</li>
                        )
                    })
                }
            </ul>
            <div className="slideArrows">
                <button onClick={() => mainSlide.current.slickPrev()}><i className='xi-angle-left'></i></button>
                <button onClick={() => mainSlide.current.slickNext()}><i className='xi-angle-right'></i></button>
            </div>
        </section>
    )
}

export default MainVisual;