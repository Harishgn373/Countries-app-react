import { createContext,useState } from "react";
let regionval = createContext();


export default function Context({children}) {
    const [region,setregion] = useState("All");
    const [countryName,setcountryName] = useState("");

  return (
     <regionval.Provider value={{region,setregion,countryName,setcountryName}}>
        {children}
     </regionval.Provider>
  )
}
export  {regionval};