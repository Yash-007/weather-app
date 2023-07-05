import React, { useEffect, useState } from 'react';
import './index.css';


function Weathapp() {
 
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(()=>{
        const fetchApi= async()=>{
            const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a7349d2b2e77de644dfb32cbf045134b`;
            const response= await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
            console.log(resJson.main);
        }

        fetchApi();
    },[search])

  return (
  <>
  <div className='box'>
   <div className='inputData'>
    <input type='search' value={search} className='inputField' onChange={(event)=>{
   setSearch(event.target.value);
    }}/>

   </div>

   {!city ? (<p className='errorMsg'>No Data found</p>) : (
    <div>  
    <div className='info'>
  <h2 className='location'>
    {search}
  </h2>
    <h1 className='temp'>
     {city.temp}° Cel
    </h1>
    <h3 className='tempmin_max'> Min : {city.temp_min}° Cel |  Max :  {city.temp_max}° Cel</h3>
  </div>

  <div className='wave -one'></div>
  <div className='wave -two'></div>
  <div className='wave -three'></div>
   </div>
   )}

  </div>
 </>
  );
}

export default Weathapp;
