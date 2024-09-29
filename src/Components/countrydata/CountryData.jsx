import React, { useDebugValue, useEffect, useState } from 'react'
import './CountryData.css'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import CountryCard from './CountryCard';

function CountryData() {
    const [cData,setCData] = useState ([])

    useEffect(()=>{
      getData()
    },[])

    const getData = ()=>{
        axios.get('https://restcountries.com/v3.1/all').then((response)=>{
            setCData(response.data)
        })
    }
    
  return (
    <div className='countryBg'>
    <div className='countriesBox'>
        { }
    </div>
    <div className='cards'>
    {cData.map((country,index)=> <CountryCard country = {country} key = {index}  />)}
    </div>
    </div>
  )
}

export default CountryData