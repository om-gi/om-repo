import React, { useEffect, useState } from 'react';
import "./css/style.css";
const Tempapp = () => {
    const [city , setCity] = useState(null);
    const [search , setSearch] = useState("Mumbai");

    useEffect (() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=eeef5a5728b2ececb445056dc7a5c131`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);

        }
        fetchApi();
    },[search])

    return (
        <>
        <div className='box'>
            <div className='inputdata'>
                <input type="search" value={search} className='inputfield' onChange={ (event) => {
                    setSearch(event.target.value)
                }} />
            </div>

            {!city ? (
                <p className='errorMsg'>No Data Found</p>
            ) : (
                <div>
                <div className='info'>
                <h2 className='location'>
                <i className ="fas fa-street-view"></i>{search}</h2>
                <h1 className='temp'>
                    {city.temp}Cel
                </h1>
                <h3 className='tempmin_max'> Min : {city.temp_min} | Max : {city.temp_max} Cel</h3>
            </div>
            </div>
            )}

            </div>
            </>
            
        

    )
}

export default Tempapp;