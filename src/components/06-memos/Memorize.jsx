import React, { useState } from 'react'
import { useCounter } from "../../hooks/useCounter";
import { Small } from './Small';

import "../02-useEffect/effects.css";

export const Memorize = () => {

    const [show, setShow] = useState(true);
    const {counter, increment} = useCounter(10);

    return (
        <div>
            <h1>Counter: <Small value={counter}/></h1>

            <button
                className="btn btn-outline-success mt-4"
                onClick={increment}
            >
                +1
            </button>
            <button
                className="btn btn-outline-primary ml-3 mt-4"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>

        
    )
}
