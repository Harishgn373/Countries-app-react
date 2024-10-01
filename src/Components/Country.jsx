import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState,useContext } from 'react';
import {regionval} from './Context';
import Loading  from './Loading';

export default function Country() {

  const [countryData, setcountryData] = useState([]);

  const {region,countryName,setcountryName} = useContext(regionval);
 
  useEffect(() => {
    if(region === "All"){
      fetch('https://restcountries.com/v3.1/all')
      .then((response) => {
        return response.json();
      }).then((dd) => { 
        if(countryName){
          let filterednamedata = dd.filter((ele)=>{
              return  ele.name.common.toLowerCase().startsWith(countryName);
          })
          setcountryData(filterednamedata);
        }else{
           setcountryData(dd);
        }
      }).catch(()=>{
        <div className='w-[100%] h-[100vh] flex justify-center items-center'><div className='text-red-600 lg:text-9xl text-4xl font-bold'>Loading..........</div></div>
       })
    }
  }, [region,countryName]);
  
  useEffect(()=>{
    if(countryData && region!=='All'){
      fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
      return response.json();
    }).then((dd) => {
      let selectedRegion = dd.filter((selcountry)=>{
          let name = selcountry.name.common.toLowerCase(); 
          let a = selcountry.region === region ;
          let b = name.startsWith(countryName);
          return a && b;
      })
      setcountryData(selectedRegion)
    }).catch(()=>{
      <div className='w-[100%] h-[100vh] flex justify-center items-center'><div className='text-red-600 lg:text-9xl text-4xl font-bold'>Loading..........</div></div>
     })
    }else{
      <div>loading............</div>
    }
    
  },[region,countryName])
 
if(!countryData){
  return (
     <Loading/>
 )
}
else{
  return (
   <>
      {countryData.map((eachcountry)=>{
          return(<Link to={`/SingleCountry/${eachcountry.cca2}`}><div className=' w-[300px] h-[420px] rounded-xl shadow-2xl bg-white'>
            <div className=' w-[100%] h-[200px]'>
              <img src={eachcountry.flags.svg} alt="Flag" className='rounded-t-xl object-cover w-[100%] h-[200px]' />
            </div>
            <div className=' w-[100%] h-[220px] flex justify-around items-center flex-col '>
              <h1 className='text-2xl font-bold text-center text-black'>{eachcountry.name.common}</h1>
              <p className='text-xl text-black'>Population : {eachcountry.population}</p>
              <div className='bg-neutral-200 h-[50px] w-[80%] rounded-3xl flex justify-center items-center'>
                <h2 className='text-xl text-black'>Region : {eachcountry.region}</h2>
              </div>
              <p className='text-xl text-black'>Capital : {eachcountry.capital}</p>
            </div>
          </div></Link>)
      })
      }
    </>
  )
}
}
