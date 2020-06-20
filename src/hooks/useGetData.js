import { useState, useEffect } from 'react';
const api = 'https://curriculum-vitae-c1dc8.firebaseio.com/.json';

const useGetData = () => {
    const [mydata, setData] = useState([]);

    useEffect(() => {
        fetch(api)
        .then(response => response.json())
        .then(data => setData(data))
        console.log(mydata)
    }, []);

    console.log(mydata)
    return mydata;
}

export default useGetData;

//esto es un custom hook