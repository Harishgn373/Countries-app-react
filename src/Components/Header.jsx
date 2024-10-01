import React  from 'react';
import { useContext } from 'react';
import { regionval } from './Context';
import Theme from './Theme';

export default function Header() {
    const { region, setregion, countryName, setcountryName} = useContext(regionval);
    
    function dropdown(e) {
        setregion(e.target.value);
        console.log(region);
        setcountryName("");
    }
    function inputText(e) {
        setcountryName(e.target.value.toLowerCase());
        console.log(countryName);
    }
    return (
        <header>
            <div className='p-[15px] w-[100%] lg:h-[100vh] h-[20vh] flex justify-around items-center flex-col border-yellow-400 border-2 lg:rounded-[10px] '>
                <div className='flex justify-between w-[100%] lg:h-[10vh] '>
                    <div>
                        <h1 className='text-[26px]  font-bold'>Countries</h1>
                    </div>
                    <div>
                        <Theme/>
                    </div>
                </div>
                <hr />
                <div className='w-[100%] lg:h-[600px] h-[10vh] '>
                    <div className='w-[100%] lg:h-[12vh] h-[10vh] flex justify-around items-start flex-col'>
                        <div className='w-[100%] h-[5vh]'>
                            <input type="text" placeholder='Search By Name' value={countryName} onChange={inputText} className='w-[100%] h-[4vh] border-2 text-black' />
                        </div>
                        <div className='w-[100%] lg:h-[5vh]'>
                            <label htmlFor="drop" className='lg:text-lg text-2xl'>Filter by Region : </label>
                            <select name='drop' onChange={dropdown} className='w-[150px] lg:w-[130px] h-[4vh] border-2 text-black' value={region}>
                                <option value="All">All</option>
                                <option value="Africa">Africa</option>
                                <option value="Americas">Americas</option>
                                <option value="Asia">Asia</option>
                                <option value="Europe">Europe</option>
                                <option value="Oceania">Oceania</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
