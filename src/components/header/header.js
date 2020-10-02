import React from 'react';

import Button from '../button';

import './header.scss';

const Header = () => {
    return (
        <header className="main-header">
            <div className="logo">
                <img src="/images/logo.png" alt="Toxin logo"/>
            </div>
            <nav className="main-header-navbar">
                <ul className="main-header-navbar__list">
                    <li className="main-header-navbar__item"><span className="main-header-navbar__link main-header-navbar__link--active">О нас</span></li>
                    <li className="main-header-navbar__item"><span className="main-header-navbar__link">Услуги</span></li>
                    <li className="main-header-navbar__item"><span className="main-header-navbar__link">Вакансии</span></li>
                    <li className="main-header-navbar__item"><span className="main-header-navbar__link">Новости</span></li>
                    <li className="main-header-navbar__item"><span className="main-header-navbar__link">Соглашения</span></li>
                </ul>
                <div className="main-header-navbar__user-controls">
                    <Button buttonClassName = "button button--outline">Войти</Button>
                    <Button buttonClassName = "button">Зарегистрироваться</Button>
                </div>
            </nav>
        </header>
    );
}

export default Header;