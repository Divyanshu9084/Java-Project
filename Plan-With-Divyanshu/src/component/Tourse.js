import React from 'react'
import Card from './Card'

 const Tourse = ({tourse, removeTour}) => {
  return (
    <div className='container'>
        <div>
            <h2 className='title'>Plan With Divyanshu</h2>
        </div>
        <div className='cards'>
            {
               tourse.map((tour) => {
                  return <Card key={tour.id} {...tour} removeTour={removeTour}/>
               })
            }
        </div>
    </div>
  )
}
export default Tourse;
