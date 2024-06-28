import './Footer.scss';

export const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__left'>
                    <div className='footer__box '>
                        <img
                            src="./img/logo.png"
                            alt="photo"
                            className='footer__logo'
                        />

                        <p className='footer__text'>
                            Últimas Notícias
                        </p>
                    </div>

                    <p className='footer__copyring'>
                        © Copyright 2000-2024 Globo Comunicação e Participações S.A.
                    </p>
                </div>

                <div className='footer__right'>
                    <p className='footer__text'>
                        Globo Notícias
                    </p>

                    <nav className='footer__nav'>
                        <ul className='footer__list'>
                            <li className='footer__link'>
                                princípios editoriais
                            </li>

                            <li className='footer__link'>
                                política de privacidade
                            </li>

                            <li className='footer__link'>
                                minha conta
                            </li>

                            <li className='footer__link'>
                                anuncie conosco
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}