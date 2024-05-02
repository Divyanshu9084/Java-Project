import  RAMDOM  from "./components/RAMDOM"
import  Tags  from "./components/Tags"
// import Handing from "./components/Handing"



export default function App() {
  return (
    <div className="w-full h-screen flex-col flex background relative overflow-x-hidden items-center">
      <h1 className=" bg-white  w-11/12 text-center mx-auto mt-[50px] text-3xl font-bold rounded-lg  ">RAMDOM GIFS</h1>
      <div className="flex flex-col w-full gap-y-10 mt-[30px]  items-center">
        <RAMDOM/>
        <Tags/>
      </div>
      
      
    </div> 
  )
}
