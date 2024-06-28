import './Top.scss';

export const Top = () => {

    return (
        <div className="top">
            <nav className="top__nav">
                <ul className="top__list">
                    <li className="top__link">
                        <a
                            href="#field"
                            className="top__item first"
                        >
                            globo.com
                        </a>
                    </li>
                    <li className="top__link">
                        <a
                            href="#field"
                            className="top__item second"
                        >
                            g1
                        </a>
                    </li>
                    <li className="top__link">
                        <a
                            href="#field"
                            className="top__item third"
                        >
                            ge
                        </a>
                    </li>
                    <li className="top__link">
                        <a
                            href="#field"
                            className="top__item fourth"
                        >
                            gshow
                        </a>
                    </li>
                    <li className="top__link">
                        <a
                            href="#field"
                            className="top__item fifth"
                        >
                            globoplay
                        </a>
                    </li>
                    <li className="top__link">
                        <a
                            href="#field"
                            className="top__item six"
                        >
                            o globo
                        </a>
                    </li>
                    <li className="top__link">
                        <a
                            href="#field"
                            className="top__item seven"
                        >
                            gui de compras
                        </a>
                    </li>
                </ul>
            </nav>

            <div className='top__bottom-box'>
                <a
                    href="#field"
                    className='top__text'
                >
                    Assine Já
                </a>

                <a
                    href="#field"
                    className='top__container'
                >
                    <img
                        src="./img/icon.png"
                        alt="icon"
                        className='top__icon'
                    />

                    <p className='top__text'>
                        Conta Globo
                    </p>
                </a>
            </div>
        </div>
    )
}