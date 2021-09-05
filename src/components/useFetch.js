import {useEffect, useState} from 'react'

const useFetch = (url) =>  {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
        .then(res => {
           if (!res.ok){
             throw Error()  
           }
            return res.json()
        })
        .then(data => {
            setData(data)
            setIsLoading(false)
            setError(false)
        })
        .catch (err => {
            if(err.name === 'AbortError'){
                console.log('Fetch Aborted')
            } else {
                setError(true)
                setIsLoading(false)
            }
            
        })

        return () => abortCont.abort();

    }, [])

    return {data, isLoading, error}
}

export default useFetch;