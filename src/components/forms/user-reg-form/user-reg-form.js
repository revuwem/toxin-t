import React, { Component } from 'react';

import Button from '../../button';

import '../../../form.scss';
import './user-reg-form.scss';

export default class UserRegForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            birthDate: '',
            email: '',
            password: '',
            confirmPassword: '',
            subscribe: false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.id + ' had been submitted');
        console.table(this.state);
    }

    handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form action="" id="userRegForm" className="form" onSubmit={this.handleFormSubmit}>
                <h2>Регистрация аккаунта</h2>

                <label htmlFor="firstName" className="form__label">
                    Имя
                    <input type="text" id="firstName" name="firstName" className="form__input" placeholder="Имя" onChange={this.handleInputChange} />
                </label>
                <label htmlFor="lastName" className="form__label">
                    Фамилия
                    <input type="text" id="lastName" name="lastName" className="form__input" placeholder="Фамилия" onChange={this.handleInputChange} />
                </label>

                <fieldset className="form__fieldset">
                    <legend className="form__legend">Пол</legend>
                    <label htmlFor="genderMale" className="form__label form__label--flexible">
                        Мужчина
                        <input type="radio" name="gender" id="genderMale" value="male" className="form__input" onChange={this.handleInputChange} />
                    </label>
                    <label htmlFor="genderFemale" className="form__label form__label--flexible">
                        Женщина
                        <input type="radio" name="gender" id="genderFemale" value="female" className="form__input" onChange={this.handleInputChange} />
                    </label>
                    <label htmlFor="genderHidden" className="form__label form__label--flexible">
                        Предпочитаю не указывать
                        <input type="radio" name="gender" id="genderHidden" value="hidden" className="form__input" onChange={this.handleInputChange} />
                    </label>
                </fieldset>

                <label htmlFor="birthDate" className="form__label">
                    Дата рождения
                    <input type="date" name="birthDate" id="birthDate" className="form__input" onChange={this.handleInputChange} />
                </label>   

                <label htmlFor="email" className="form__label">
                    Email
                        <input type="text" id="email" name="email" className="form__input" placeholder="Email" onChange={this.handleInputChange} />
                </label>
                <label htmlFor="password" className="form__label">
                    Пароль
                        <input type="text" id="password" name="password" className="form__input" placeholder="Пароль" onChange={this.handleInputChange} />
                </label>
                <label htmlFor="confirmPassword" className="form__label">
                    Подтвердите пароль
                        <input type="text" id="confirmPassword" name="confirmPassword" className="form__input" placeholder="Подтвердите пароль" onChange={this.handleInputChange} />
                </label>

                <label htmlFor="subscribe" className="form__label form__label--flexible">
                    Получать спецпредложения
                    <input type="checkbox" name="subscribe" id="subscribe" className="form__input" onChange={this.handleInputChange} />
                </label>
                <Button type="submit" buttonClassName="button">Перейти к оплате</Button>
            </form>
        );
    }
}