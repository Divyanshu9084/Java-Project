import React, { useState } from "react";
import data from "./data";
import Tourse from "./component/Tourse";

const App = () => {
  const [tourse,setTourse] = useState(data);

  function removeTour(id){
     const newtoure = tourse.filter(tour => tour.id !== id);
     setTourse(newtoure);
  }

  if(tourse.length === 0){
    return (
     <div className="refresh">
        <h2>No Tourse Left</h2>
        <button className="btn-white" onClick={() => setTourse(data)}>
           Refersh
        </button>
     </div>
    );
  }

  return (
    <div className="app">
        <Tourse tourse={tourse} removeTour={removeTour}/>
    </div>
  )
};

export default App;
