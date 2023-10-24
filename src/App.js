import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Sidemenu from "./components/Sidemenu";

function App() {
  const [index,setIndex] = useState('Home');
  console.log(index);
  return (
    <div className="text-center ">
      <Navbar index={index} />
      <div className="flex">
        <Sidemenu index={index} setIndex={setIndex}/>
        <div>
          <div className="flex justify-between my-5 ml-5">
            <h1 className="text-xl font-bold opacity-70">{index}</h1>
            <button className="text-white bg-orange-600 px-4 py-1 rounded-md font-bold">+ Add New Card</button>
          </div>
          <div className="flex flex-wrap">
            <Card number1={'R65758'} number2={'RA56487'}  />
            <Card number1={'DEF6578'} number2={'TA56487'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
