import React from 'react';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="main-footer__wrapper main-footer__wrapper--larger">
                <div className="main-footer__inner">
                    <div className="logo">
                        <img src="/images/logo.png" alt="Toxin logo" />
                    </div>
                    <p>
                        Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»
                </p>
                </div>
                <div className="main-footer__inner">
                    <ul className="social-links">
                        <li className="social-links__item">
                            <a href="#" className="social-links__link">
                                <img src="/images/social-icons/twitter.svg" alt="Twitter" />
                            </a>
                        </li>
                        <li className="social-links__item">
                            <a href="#" className="social-links__link">
                                <img src="/images/social-icons/facebook.svg" alt="Facebook" />
                            </a>
                        </li>
                        <li className="social-links__item">
                            <a href="#" className="social-links__link">
                                <img src="/images/social-icons/instagram.svg" alt="Instagram" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="main-footer__inner">
                    <h3>Подписка</h3>
                    <p>Получайте специальные предложения и новости сервиса</p>
                    <form className="form form--plain">
                        <input type="text" id="subcribe-email" name="subcribe-email" className="form__input" placeholder="Email" />
                        <button type="submit" className="visually-hidden">Подписаться</button>
                    </form>
                </div>
            </div>
            <div className="main-footer__wrapper">
                <p className="copyright">Copyright © 2020 Toxin отель. Все права защищены.</p>
            </div>
        </footer>
    );
}

export default Footer;