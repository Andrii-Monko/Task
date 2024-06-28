import { IoIosMenu } from "react-icons/io";
import './Header.scss';

export const Header = () => {

    return (
        <div className="header">
            <div className="header__top-container">
                <div className="header__logo-box">
                    <a
                        href="#field"
                        className="header__menu-box"
                    >
                        <IoIosMenu className="header__menu-icon" />
                        <p className="header__menu">
                            menu
                        </p>
                    </a>

                    <a
                        href="#field"
                        className="header__logo"
                    >
                        <img
                            src="./img/logo.png"
                            alt="logo"
                            className="header__logo-icon"
                        />
                    </a>
                </div>

                <a className="header__title">
                    São Paulo
                </a>

                <input
                    type="text"
                    className="header__input"
                    placeholder="buscar"
                />
            </div>
        </div>
    )
}