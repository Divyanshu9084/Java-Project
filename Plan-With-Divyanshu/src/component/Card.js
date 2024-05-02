import React, { useState } from 'react'

 const Card = ({id,image, info, price, name, removeTour}) => {
  const [readmore, setreadmore] = useState(false);
  const Discription = readmore ? info : `${info.substring(0, 200)}...`
                        

  function readmoreHandler(){
    setreadmore(!readmore);
  }
  return (
    <div className="card">
       <div>
          <img src={image} className="image"/>
       </div>

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
       </div>
       
       <div className="description">
         {Discription}
         <span  className="read-more" onClick={readmoreHandler}>
         {readmore ? `show less`: `readmore`}
         </span>
       </div>

       </div>
       
      <button  className="btn-red" onClick={() => removeTour(id)}>
         Not Intersted
      </button>     
     </div>
  )
}
export default Card;
