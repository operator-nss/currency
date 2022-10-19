import {useEffect, useRef, useState} from 'react'
import Block from './components/Block/Block'
import arrows from './assets/arrows.svg'

function App() {
    const [currency1, setCurrency1] = useState("RUB");
    const [currency2, setCurrency2] = useState("USD");
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const course = useRef({});
    const date = useRef('');
    const [rebase, setRebase] = useState(false);


    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            fetch('https://cdn.cur.su/api/latest.json')
                .then(data => data.json())
                .then((res) => {
                    course.current = res.rates;
                    date.current = res.lastupdate;
                    onChangeValueTo(1)
                })
                .catch(e => console.log(e))

            isMounted.current = true;
        }
        onChangeValueFrom(value1)
        onChangeValueTo(value2)
    }, [currency1, currency2])


    const onChangeValueFrom = (num: number) => {
        // @ts-ignore
        const price = num / course.current[currency1];
        // @ts-ignore
        const result = price * course.current[currency2];
        setValue1(num)
        setValue2(+result.toFixed(3))
    }


    const onChangeValueTo = (num: number) => {
        // @ts-ignore
        const result = (course.current[currency1] / course.current[currency2]) * num;
        setValue2(num)
        setValue1(+result.toFixed(3))
    }

    const changeBlocks = () => {
        setRebase(!rebase)
    }


    return (
        <div className="App">
            <div className={rebase ? 'blocks blocks--rebase' : 'blocks'}>
                <Block value={value1} onChangeCurrency={cur => setCurrency1(cur)} onChangeValue={onChangeValueFrom}
                       currency={currency1}/>
                <img src={arrows} onClick={changeBlocks} alt="arrows"/>
                <Block value={value2} onChangeCurrency={cur => setCurrency2(cur)} onChangeValue={onChangeValueTo}
                       currency={currency2}/>
            </div>
            <div className='date'>Данные за {date.current.split('.')[0].replace('T', ', время ')}</div>
        </div>
    )
}

export default App
