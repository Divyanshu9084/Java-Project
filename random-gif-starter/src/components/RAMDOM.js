import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spiner from './Spiner';
// import usegifs from '../hooks/usegifs';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

 const RAMDOM = () => {
  const [Gifs, setGifs] = useState('');
  const [loding, setloding] = useState('false');
  
  async function fatchData(){
    setloding(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);
    const srcoutput = data.data.images.downsized_large.url;
    setGifs(srcoutput);
    setloding(false);
  }

  useEffect( () => {
     fatchData();
  }, [])
    

    function clickHandler(){
      fatchData();
    }

  return (
    <div className='w-1/2 bg-green-600 flex flex-col  border border-black  rounded-lg items-center gap-10'>
        <h1 className='font-bold underline text-xl mt-[15px] '>RAMDOM GIFS</h1>
        {
          loding? (<Spiner/>): (<img src={Gifs} width="450px"/>)
        }
        
        <button onClick={clickHandler} className='bg-white w-9/12 rounded-md mb-[20px]'>
            Ganrate
        </button>
    </div>
  )
}
 export default RAMDOM;