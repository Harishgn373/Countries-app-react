import React from 'react';
import { useState} from 'react';

export default function Theme() {
  const[on,off] = useState(false);

  function theme() {
    if(on === false){
        document.body.style.backgroundColor = "#181818";
        document.body.style.color = "white";
        off(true);
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        off(false);
    }
}
  return (
    <button className='rounded-[10px] w-[50px] h-[35px] bg-green-600' onClick={theme}>{on === false?'dark':'light'}</button>
  )
}
