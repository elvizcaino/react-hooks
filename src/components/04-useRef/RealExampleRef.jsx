import React, { useRef, useState } from 'react'
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

import "../02-useEffect/effects.css";

export const RealExampleRef = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />

            { show && <MultipleCustomHooks /> }
            <button
                className="btn btn-primary mt-4"
                onClick={() => {
                    setShow(!show)
                }}
            >
                Show/Hide
            </button>
        </div>
    )
}
