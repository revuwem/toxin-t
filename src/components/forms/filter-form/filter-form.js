import React, { Component } from 'react';

import Button from '../../button';

import '../../../form.scss';
import './filter-form.scss';

export default class FilterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            period: '',
            guests: '',
            priceStart: '',
            priceEnd: '',
            smokeAllowed: false,
            petsAllowed: false,
            guestsAllowed: false
        };
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        console.table(this.state);
    }

    handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form action="" className="form form--plain" id="filterForm" onSubmit={this.handleFormSubmit}>
                <h2>Фильтр</h2>
                <label htmlFor="period" className="form__label">
                    Даты пребывания в отеле
                    <input type="date" name="period" id="period" className="form__input" onChange={this.handleInputChange}/>
                </label>
                <label htmlFor="guests" className="form__label">
                    Гости
                    <select name="guests" id="guests" className="form__input" onChange={this.handleInputChange}>
                        <option>Сколько гостей</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </label>

                <h3>Цена</h3>
                <div className="form__inner form__inner--group">
                    <label htmlFor="priceStart" className="form__label">
                        От
                    <input type="number" name="priceStart" id="priceSart" className="form__input" onChange={this.handleInputChange}/>
                    </label>
                    <label htmlFor="priceEnd" className="form__label">
                        До
                    <input type="number" name="priceEnd" id="priceEnd" className="form__input" onChange={this.handleInputChange}/>
                    </label>
                </div>

                <label htmlFor="smokeAllowed" className="form__label form__label--flexible">
                    Можно курить
                        <input type="checkbox" name="smokeAllowed" id="smokeAllowed" className="form__input" onChange={this.handleInputChange}/>
                </label>
                <label htmlFor="petsAllowed" className="form__label form__label--flexible">
                    Можно с питомцами
                        <input type="checkbox" name="petsAllowed" id="petsAllowed" className="form__input" onChange={this.handleInputChange}/>
                </label>
                <label htmlFor="guestsAllowed" className="form__label form__label--flexible">
                    Можно пригласить гостей
                        <input type="checkbox" name="guestsAllowed" id="guestsAllowed" className="form__input" onChange={this.handleInputChange}/>
                </label>
                <Button buttonClassName="button" type="submit">Смотреть</Button>
            </form>
        );
    }
}