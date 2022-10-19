import React, {FC} from 'react';

type PopupProps = {
    popup: boolean,
    onChangeCurrency: (value: string) => void,
    openPopup: () => void,
    changeCurrency: (value: string) => void
}

type currency = {
    name: string,
    value: string
}

const currency: currency[] = [
    {name: 'Российский рубль', value: 'RUB'},
    {name: 'Доллар США', value: 'USD'},
    {name: 'ЕВРО', value: 'EUR'},
    {name: 'Фунт стерлингов', value: 'GBP'},
    {name: 'Австралийский доллар', value: 'AUD'},
    {name: 'Азербайджанский манат', value: 'AZN'},
    {name: 'Армянский драм', value: 'AMD'},
    {name: 'Белоруссикй рубль', value: 'BYN'},
    {name: 'Болгарский лев', value: 'BGN'},
    {name: 'Бразильсикй реал', value: 'BRL'},
    {name: 'Вегерский форинт', value: 'HUF'},
    {name: 'Вон Республики Корея', value: 'KRW'},
    {name: 'Датская крона', value: 'DKK'},
    {name: 'Индийская рупия', value: 'INR'},
    {name: 'Казахстанский тенге', value: 'KZT'},
    {name: 'Канадский доллар', value: 'CAD'},
    {name: 'Киргизский сом', value: 'KGS'},
    {name: 'Китайсикй юань', value: 'CNY'},
    {name: 'Молдавский лей', value: 'MDL'},
    {name: 'Новый румынский лей', value: 'RON'},
    {name: 'Новый туркменсикй манат', value: 'TMT'},
    {name: 'Норвежская крона', value: 'NOK'},
    {name: 'Польсикй злотый', value: 'PLN'},
    {name: 'Сингапурский доллар', value: 'SGD'},
    {name: 'Таджиксикй сомони', value: 'TJS'},
    {name: 'Турецкая лира', value: 'TRY'},
    {name: 'Узбекский сум', value: 'UZS'},
    {name: 'Украинская гривна', value: 'UAH'},
    {name: 'Чешская крона', value: 'CZK'},
    {name: 'Шведская крона', value: 'SEK'},
    {name: 'Швейцарский франк', value: 'CHF'},
    {name: 'Южноафриканский рэнд', value: 'ZAR'},
    {name: 'Японская йена', value: 'JPY'},
]

const Popup: FC<PopupProps> = ({popup, onChangeCurrency, changeCurrency, openPopup}) => {

    const changeCurrencyPopup = (value: string) => {
        onChangeCurrency(value)
        changeCurrency(value)
        openPopup()

    }
    return (
        <div className={popup ? 'popup--open popup' : 'popup'}>
            <ul>
                {currency.map((item: currency, i) => {
                    return <li onClick={() => changeCurrencyPopup(item.value)} className='popup__currency'
                               key={i}>{item.name} <span>{item.value}</span></li>
                })}
            </ul>

        </div>
    );
};

export default Popup;