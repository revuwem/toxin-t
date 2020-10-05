import React, { Component } from 'react';
import Button from '../button/button';

import './search-room-form.scss';

export default class SearchRoomForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            arrival: '',
            departure: '',
            guests: ''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Search room form has been submitted: ', this.state.arrival, this.state.departure, this.state.guests);
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

        const { arrival, departure, guests } = this.state;

        return (
            <form action="" className="form" onSubmit={this.handleFormSubmit} id="search-room-form">
                <h2>Найдём номера под ваши пожелания</h2>
                <div className="form__inner form__inner--group">
                    <label htmlFor="arrival" className="form__label">
                        Прибытие
                        <input type="date" id="arrival" name="arrival" className="form__input" value={arrival} onChange={this.handleInputChange} />
                    </label>

                    <label htmlFor="departure-date" className="form__label">
                        Отбытие
                        <input type="date" id="departure" name="departure" className="form__input" value={departure} onChange={this.handleInputChange} />
                    </label>
                </div>
                <div className="form__inner">
                    <label htmlFor="guests" className="form__label">
                        Гости
                        <select name="guests" id="guests" className="form__input" value={guests} onChange={this.handleInputChange}>
                            <option>Сколько гостей</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </label>
                </div>
                <Button buttonClassName="button form__button" type="submit">Подобрать номер</Button>
            </form>
        );
    }
}