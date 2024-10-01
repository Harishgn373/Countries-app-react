import React, { useEffect, useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import Theme from './Theme';

export default function SingleCountry() {
   const {single} = useParams()
   const [singleConDeatil,setsingleConDeatil] = useState(null);
  
   useEffect(()=>{
         fetch(`https://restcountries.com/v3.1/alpha/${single}`)
         .then((Response)=>{
            return Response.json();
         }).then((data)=>{
          setsingleConDeatil(data[0]);
         }).catch(()=>{
          <div className='w-[100%] h-[100vh] flex justify-center items-center'><div className='text-red-600 lg:text-9xl text-4xl font-bold'>Loading..........</div></div>
         })
   },[single]);
  if(!singleConDeatil){
    return (<div className='w-[100%] h-[100vh] flex justify-center items-center'><div className='text-red-600 lg:text-9xl text-4xl font-bold animate-pulse'>Loading..........</div></div>)
   }else{
      return (
        <>
          <div className=' w-[100%] h-[100vh] p-5'>
            <div className='flex justify-between items-center h-[50px] lg:px-10'>
              <Link to='/'><button className='rounded-[10px] w-[200px] h-[35px] bg-green-600'>Back To Home</button></Link>
               <Theme/>
            </div>
            <div className=' flex justify-evenly items-center lg:flex-row flex-col w-[100%] h-[72vh] lg:h-[250px]'>
            <div className='lg:w-[400px] h-[200px]  w-[100%]'>
              <img src={singleConDeatil.flags.svg} alt='flag' className='w-[400px] h-[200px] object-cover rounded-xl' />
            </div>
            <div className=' h-[150px] flex flex-col justify-around items-start w-[100%] lg:w-[300px]'>
              <h1 className='text-2xl font-bold'>{singleConDeatil.name.common}</h1>
              <p className='text-xl'>Region : {singleConDeatil.region}</p>
              <p className='text-xl'>capital : {singleConDeatil.capital}</p>
            </div>
            <div className='  h-[150px] flex flex-col justify-around items-start w-[100%] lg:w-[300px] overflow-auto scrollbar-none'>
             {singleConDeatil.subregion ?<p className='text-xl '>Subregion : {singleConDeatil.subregion}</p>:<p className='text-xl'>Subregion : Not found</p> } 
              <p className='text-xl '>Timezones : {singleConDeatil.timezones}</p>
              <p className='text-xl'>Start Week : {singleConDeatil.startOfWeek}</p>
            </div>
            </div>
            <div className=' flex justify-around items-start flex-col h-[150px] lg:pl-[100px]'>
              <h1 className='text-3xl'>Neighboring Countries</h1>
              <div className='flex justify-start items-start flex-wrap lg:gap-10 gap-5'>
             {singleConDeatil.borders && singleConDeatil.borders.length > 0 ? singleConDeatil.borders.map((le)=>{
                  return <Link to={`/SingleCountry/${le}`} key={le}>
                  <button className='w-12 h-7 bg-green-600 rounded'>
                    {le}
                  </button>
                </Link>;
                  }) : <div className='text-2xl'>No neighboring countries found.</div>}

              </div>
            </div>
          </div>
        </>
     )
   }
}
