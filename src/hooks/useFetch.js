import { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {
    
    const isMountedRef = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        return () => {
            isMountedRef.current = false;
        }
    }, []);

    useEffect(() => {
        if(isMountedRef.current) {
            setState({
                data: null,
                loading: true,
                error: null
            });
        } else {
            console.log("setState no se llamó")
        }

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setState({
                    loading: false,
                    error: null,
                    data
                });
            });
    }, [url]);

    return state;
    
}
