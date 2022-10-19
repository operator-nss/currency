import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import Popup from "../Popup/Popup";

// const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP'];


type BlockProps = {
    currency: string,
    value: number,
    onChangeValue: (num: number) => void,
    onChangeCurrency: (data: string) => void
}

const Block: FC<BlockProps> = ({value = 1, currency, onChangeValue, onChangeCurrency}) => {
        const defaultCurrenciesRef = useRef(['RUB', 'USD', 'EUR', 'GBP'])
        const [popup, setPopup] = useState(false);

        const openPopup = () => {
            setPopup(!popup)
        }

        const changeCurrency = (res: string) => {
            if (!defaultCurrenciesRef.current.includes(res)) {
                defaultCurrenciesRef.current[3] = res;
            }
        }

        return (
            <div className="block">
                <ul className="currencies">
                    {defaultCurrenciesRef.current.map((cur) => (
                        <li
                            onClick={() => onChangeCurrency(cur)}
                            className={currency === cur ? 'active' : ''}
                            key={cur}>
                            {cur}
                        </li>
                    ))}
                    <li onClick={openPopup}>
                        <svg height="50px" viewBox="0 0 50 50" width="50px">
                            <rect fill="none" height="50" width="50"/>
                            <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 "/>
                        </svg>
                    </li>
                </ul>
                <input
                    onChange={(e) => onChangeValue(+e.target.value)}
                    value={value}
                    type="number"
                />
                <Popup onChangeCurrency={onChangeCurrency} openPopup={openPopup}
                       changeCurrency={changeCurrency} popup={popup}/>

            </div>

        )

    }
;

export default Block