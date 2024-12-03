// import { useContext } from 'react';

// import { CounterContext } from '../context/CounterContext';
import ChangeCounter from '../components/ChangeCounter';
import { useCounterContext } from '../hooks/useCounterContext';

// 4 - refatorando com hook


const Home = () => {

    // const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();

    return (
        <div>
            <h1>Home</h1>
            <p>Valor do contador.: {counter}</p>
            { /** 3 - alterando valor do contexto */}
            <ChangeCounter />
        </div>
    )
}

export default Home;