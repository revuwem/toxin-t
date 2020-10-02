import React from 'react';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="main-footer__inner">
                <div className="logo">
                    <img src="/images/logo.png" alt="Toxin logo" />
                </div>
                <p>
                    Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»
                </p>
            </div>
            <div className="main-footer__inner">
                <ul className="social-icons">
                    <li className="social-icons__item">Twitter</li>
                    <li className="social-icons__item">Facebook</li>
                    <li className="social-icons__item">Instagram</li>
                </ul>
            </div>
            <div className="main-footer__inner">
                <h3>Подписка</h3>
                <p>Получайте специальные предложения и новости сервиса</p>
                <form className="form">
                    <input type="text" id="subcribe-email" name="subcribe-email" className="form__input" placeholder="Email"/>
                    <button type="submit">Подписаться</button>
                </form>
            </div>
        </footer>
    );
}

export default Footer;