
export default class RoomsService {


    _data = [
        {
            id: 1,
            prestige: 'lux',
            price: 9900,
            rating: 5,
            tileImage: '/images/rooms/1/image.png',
            images: [
                '/images/rooms/1/image-1.png',
                '/images/rooms/1/image-2.png',
                '/images/rooms/1/image-3.png'
            ],
            info: [
                {
                    icon: '/images/icons/emoticon.svg',
                    name: 'Комфорт',
                    description: 'Шумопоглощающие стены'
                },
                {
                    icon: '/images/icons/location.svg',
                    name: 'Удобство',
                    description: 'Окно в каждой спальне'
                },
                {
                    icon: '/images/icons/whatshot.svg',
                    name: 'Уют',
                    description: 'Номер оснащён камином'
                }
            ],
            rules: [
                'Нельзя с питомцами',
                'Без вечеринок и мероприятий',
                'Время прибытия - после 13:00, выезд - до 12:00'
            ],
            cancellation: 'Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.',
            estimates: {
                top: 0,
                good: 0,
                normal: 0,
                bad: 0
            },
            responses: [
                {
                    author: 'Мурад Сарафанов',
                    userpic: '/images/userpics/murad.png',
                    date: '06.10.2020',
                    text: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
                    likes: 0
                },
                {
                    author: 'Патрисия Стёклышкова',
                    userpic: '/images/userpics/patricia.png',
                    date: '01.10.2020',
                    text: 'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',
                    likes: 4
                }
            ]
        },
        {
            id: 2,
            prestige: '',
            price: 8900,
            rating: 4,
            tileImage: '/images/rooms/2/image.png',
            images: [
                '/images/rooms/2/image-1.png',
                '/images/rooms/2/image-2.png',
                '/images/rooms/2/image-3.png'
            ],
            info: [
                {
                    name: 'Комфорт',
                    description: 'Шумопоглощающие стены'
                },
                {
                    name: 'Удобство',
                    description: 'Окно в каждой спальне'
                },
                {
                    name: 'Уют',
                    description: 'Номер оснащён камином'
                }
            ],
            rules: [
                'Нельзя с питомцами',
                'Без вечеринок и мероприятий',
                'Время прибытия - после 13:00, выезд - до 12:00'
            ],
            cancellation: 'Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.',
            estimates: {
                top: 0,
                good: 0,
                normal: 0,
                bad: 0
            },
            responses: [
                {
                    author: '',
                    text: 'Потрясающие впечатления! Спалось как на облаках!!'
                }
            ]
        },
        {
            id: 3,
            prestige: '',
            price: 7500,
            rating: 5,
            tileImage: '/images/rooms/3/image.png',
            images: [
                '/images/rooms/3/image-1.png',
                '/images/rooms/3/image-2.png',
                '/images/rooms/3/image-3.png'
            ],
            info: [
                {
                    name: 'Комфорт',
                    description: 'Шумопоглощающие стены'
                },
                {
                    name: 'Удобство',
                    description: 'Окно в каждой спальне'
                },
                {
                    name: 'Уют',
                    description: 'Номер оснащён камином'
                }
            ],
            rules: [
                'Нельзя с питомцами',
                'Без вечеринок и мероприятий',
                'Время прибытия - после 13:00, выезд - до 12:00'
            ],
            cancellation: 'Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.',
            estimates: {
                top: 0,
                good: 0,
                normal: 0,
                bad: 0
            },
            responses: []
        },
        {
            id: 4,
            prestige: 'lux',
            price: 8300,
            rating: 4,
            tileImage: '/images/rooms/4/image.png',
            images: [
                '/images/rooms/4/image-1.png',
                '/images/rooms/4/image-2.png',
                '/images/rooms/4/image-3.png'
            ],
            info: [
                {
                    name: 'Комфорт',
                    description: 'Шумопоглощающие стены'
                },
                {
                    name: 'Удобство',
                    description: 'Окно в каждой спальне'
                },
                {
                    name: 'Уют',
                    description: 'Номер оснащён камином'
                }
            ],
            rules: [
                'Нельзя с питомцами',
                'Без вечеринок и мероприятий',
                'Время прибытия - после 13:00, выезд - до 12:00'
            ],
            cancellation: 'Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.',
            estimates: {
                top: 0,
                good: 0,
                normal: 0,
                bad: 0
            },
            responses: []
        },
        {
            id: 5,
            prestige: '',
            price: 6700,
            rating: 3,
            tileImage: '/images/rooms/5/image.png',
            images: [
                '/images/rooms/5/image-1.png',
                '/images/rooms/5/image-2.png',
                '/images/rooms/5/image-3.png'
            ],
            info: [
                {
                    name: 'Комфорт',
                    description: 'Шумопоглощающие стены'
                },
                {
                    name: 'Удобство',
                    description: 'Окно в каждой спальне'
                },
                {
                    name: 'Уют',
                    description: 'Номер оснащён камином'
                }
            ],
            rules: [
                'Нельзя с питомцами',
                'Без вечеринок и мероприятий',
                'Время прибытия - после 13:00, выезд - до 12:00'
            ],
            cancellation: 'Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.',
            estimates: {
                top: 0,
                good: 0,
                normal: 0,
                bad: 0
            },
            responses: []
        }
    ];

    getData(){
       return this._data;
    }
}
