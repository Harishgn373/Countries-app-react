import './App.css';
import Header from './Components/Header';
import Country from './Components/Country';
import Context from './Components/Context';
import { Routes, Route } from 'react-router-dom';
import SingleCountry from './Components/SingleCountry';

function App() {
  return (
    <>
      <Context>
        <div className='flex w-full h-screen  lg:flex-row flex-col'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Header />
                  <div className='p-5 w-full lg:w-4/5 h-screen flex flex-wrap justify-around gap-y-10 overflow-y-scroll border-yellow-400 border-2 lg:rounded-[10px]'>
                    <Country />
                  </div>
                </>
              }
            />
            <Route path='/SingleCountry/:single' element={<SingleCountry/>}/>
          </Routes>
        </div>
      </Context>
    </>
  );
}

export default App;
