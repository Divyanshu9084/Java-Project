import { useState } from "react";
import "./App.css";

function App() {
  const [Count, setCount] = useState(0);

  function IncrimentHandler(){
    setCount(Count - 1);
  }

  function DecrimentHandler(){
    setCount(Count + 1);
  }

  function ResetHandler(){
    setCount(0);
  }


  return (
    <div className= "w-[100vw] h-[100vh] flex items-center justify-center gap-10 bg-[#344151]  flex-col">
       <h1 className="font-bold text-white text-3xl">Incriment && Decriment</h1>
      <div className="flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={IncrimentHandler} className="border-r-2 text-center text-[black] w-20 text-5xl">
           -
        </button>
        <div className="items-center justify-center font-bold text-[black]">
          {Count}
        </div>
        <button onClick={DecrimentHandler} className="border-l-2 text-center text-[black] w-20 text-5xl">
          +
        </button>
      </div>
      <button onClick={ResetHandler} className="bg-[#0398d4] text-white py-2 px-5 text-lg rounded-sm ">
         Reset
      </button>
    </div>
  );
}

export default App;
