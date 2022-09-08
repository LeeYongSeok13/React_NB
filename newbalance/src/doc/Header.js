const Header = () => {
    return (
        <header>
            <div className="header_top">
                <div className="container">
                    <a href=""><img src={process.env.PUBLIC_URL + "/img/logo_mynb.png"}></img></a>
                    <ul>
                        <li><a href="">매장찾기</a></li>
                        <li><a href="">고객센터</a></li>
                        <li><a href="">Membership</a></li>
                        <li><a href="">로그인</a></li>
                    </ul>
                </div>
            </div>
            <div className="header_main">
                <div className="container">
                    <a href=""><img src={process.env.PUBLIC_URL + "/img/logo.png"}></img></a>
                    <ul>
                        <li>
                            <a href="">New Release</a>
                            <ul>
                                <li><a href="">New Arrival</a></li>
                                <li><a href="">Men</a></li>
                                <li><a href="">Women</a></li>
                                <li><a href="">Kids</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">Men</a>
                            <ul>
                                <li><a href="">New</a></li>
                                <li><a href="">Best</a></li>
                                <li><a href="">남성 메인</a></li>
                                <li><a href="">신발</a></li>
                                <li><a href="">의류</a></li>
                                <li><a href="">용품</a></li>
                                <li><a href="">언더웨어</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">Women</a>
                            <ul>
                                <li><a href="">New</a></li>
                                <li><a href="">Best</a></li>
                                <li><a href="">여성 메인</a></li>
                                <li><a href="">신발</a></li>
                                <li><a href="">의류</a></li>
                                <li><a href="">용품</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">Kids</a>
                            <ul>
                                <li><a href="">New</a></li>
                                <li><a href="">Best</a></li>
                                <li><a href="">키즈 메인</a></li>
                                <li><a href="">신발</a></li>
                                <li><a href="">의류</a></li>
                                <li><a href="">용품</a></li>
                            </ul>
                        </li>
                        <li><a href="">Shoes</a></li>
                        <li><a href="">Online Shop</a></li>
                        <li><a href="">NB with IU</a></li>

                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;